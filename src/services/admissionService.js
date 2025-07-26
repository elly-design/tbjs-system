import { supabase } from '../config/supabase';

// Initialize storage bucket
const BUCKET_NAME = 'admission-docs';

// Document types for reference
export const DOCUMENT_TYPES = {
  BIRTH_CERTIFICATE: 'birth_certificate',
  PARENT_ID: 'parent_id',
  GUARDIAN_ID: 'guardian_id',
  SCHOOL_CLEARANCE: 'school_clearance',
  PASSPORT_PHOTO: 'passport_photo'
};

/**
 * Upload a file to Supabase Storage
 * @param {File} file - The file to upload
 * @param {string} studentId - The ID of the student
 * @param {string} documentType - Type of document (from DOCUMENT_TYPES)
 * @returns {Promise<Object>} - The uploaded file data or error
 */
const uploadDocument = async (file, studentId, documentType) => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${studentId}/${documentType}_${Date.now()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);

    return {
      success: true,
      data: {
        file_url: publicUrl,
        file_name: file.name,
        file_type: file.type,
        file_size: file.size
      }
    };
  } catch (error) {
    console.error('Error uploading document:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Save student admission data to Supabase
 * @param {Object} formData - The form data to save
 * @param {Object} documents - The document files to upload
 * @returns {Promise<Object>} - The result of the operation
 */
export const submitAdmission = async (formData, documents) => {
  try {
    // Start a transaction
    const { data: studentData, error: studentError } = await supabase
      .from('students')
      .insert([
        {
          full_name: formData.fullName,
          date_of_birth: formData.dateOfBirth,
          gender: formData.gender,
          class_level: formData.classLevel,
          upi_number: formData.upiNumber || null,
          assessment_number: formData.assessmentNumber || null,
          address: formData.address,
          phone_number: formData.phone,
          email: formData.email
        }
      ])
      .select('*')
      .single();

    if (studentError) throw studentError;
    
    const studentId = studentData.id;
    const documentUploads = [];

    // Upload documents in parallel
    for (const [docType, file] of Object.entries(documents)) {
      if (file) {
        const uploadResult = await uploadDocument(file, studentId, docType);
        if (uploadResult.success) {
          documentUploads.push({
            student_id: studentId,
            document_type: docType,
            ...uploadResult.data
          });
        } else {
          console.warn(`Failed to upload ${docType}:`, uploadResult.error);
        }
      }
    }

    // Save document references to the database
    if (documentUploads.length > 0) {
      const { error: docError } = await supabase
        .from('documents')
        .insert(documentUploads);
      
      if (docError) throw docError;
    }

    // Save parent/guardian information
    const { error: parentError } = await supabase
      .from('parents')
      .insert([
        {
          student_id: studentId,
          full_name: formData.parentName,
          relationship: formData.relationship,
          phone_number: formData.parentPhone,
          email: formData.parentEmail,
          occupation: formData.parentOccupation,
          address: formData.parentAddress
        }
      ]);

    if (parentError) throw parentError;

    return {
      success: true,
      studentId,
      admissionNumber: studentData.admission_number
    };
  } catch (error) {
    console.error('Error submitting admission:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to submit admission' 
    };
  }
};

/**
 * Get admission status for a student
 * @param {string} admissionNumber - The admission number to check
 * @returns {Promise<Object>} - The admission status or error
 */
export const checkAdmissionStatus = async (admissionNumber) => {
  try {
    const { data, error } = await supabase
      .from('students')
      .select(`
        id,
        full_name,
        admission_number,
        class_level,
        admission_status:admission_status(
          status,
          notes,
          reviewed_at,
          reviewed_by:profiles(
            full_name
          )
        )
      `)
      .eq('admission_number', admissionNumber)
      .single();

    if (error) throw error;
    if (!data) return { success: false, error: 'Admission not found' };

    return { success: true, data };
  } catch (error) {
    console.error('Error checking admission status:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to check admission status' 
    };
  }
};

/**
 * Get all admission applications (for admin)
 * @param {Object} filters - Optional filters for the query
 * @returns {Promise<Object>} - List of admission applications or error
 */
export const getAdmissionApplications = async (filters = {}) => {
  try {
    let query = supabase
      .from('students')
      .select(`
        id,
        full_name,
        admission_number,
        class_level,
        created_at,
        admission_status:admission_status(
          status,
          notes,
          reviewed_at,
          reviewed_by:profiles(
            full_name
          )
        )
      `)
      .order('created_at', { ascending: false });

    // Apply filters if provided
    if (filters.status) {
      query = query.eq('admission_status.status', filters.status);
    }
    if (filters.startDate && filters.endDate) {
      query = query
        .gte('created_at', filters.startDate)
        .lte('created_at', filters.endDate);
    }

    const { data, error } = await query;

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    console.error('Error fetching admission applications:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to fetch admission applications' 
    };
  }
};

/**
 * Update admission status (for admin)
 * @param {string} studentId - The ID of the student
 * @param {Object} statusData - The status update data
 * @param {string} statusData.status - New status
 * @param {string} statusData.notes - Optional notes
 * @param {string} userId - ID of the user updating the status
 * @returns {Promise<Object>} - The result of the operation
 */
export const updateAdmissionStatus = async (studentId, statusData, userId) => {
  try {
    const { error } = await supabase
      .from('admission_status')
      .update({
        status: statusData.status,
        notes: statusData.notes,
        reviewed_by: userId,
        reviewed_at: new Date().toISOString()
      })
      .eq('student_id', studentId);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error('Error updating admission status:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to update admission status' 
    };
  }
};

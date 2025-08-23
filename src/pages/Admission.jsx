import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  TextField, 
  Button, 
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  IconButton,
  Alert,
  Snackbar,
  CircularProgress
} from '@mui/material';
import { 
  Person, 
  School, 
  CalendarToday,
  AttachFile,
  PhotoCamera,
  Description,
  CheckCircle,
  Error as ErrorIcon
} from '@mui/icons-material';
import { submitAdmission, DOCUMENT_TYPES } from '../services/admissionService';

const Admission = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    classLevel: '',
    upiNumber: '',
    assessmentNumber: '',
    address: '',
    phone: '',
    email: '',
    parentName: '',
    relationship: 'Mother',
    parentPhone: '',
    parentEmail: '',
    parentOccupation: '',
    parentAddress: ''
  });

  const [documents, setDocuments] = useState({
    [DOCUMENT_TYPES.BIRTH_CERTIFICATE]: null,
    [DOCUMENT_TYPES.PARENT_ID]: null,
    [DOCUMENT_TYPES.GUARDIAN_ID]: null,
    [DOCUMENT_TYPES.SCHOOL_CLEARANCE]: null,
    [DOCUMENT_TYPES.PASSPORT_PHOTO]: null
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (field) => (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSnackbar({
          open: true,
          message: 'File size should be less than 5MB',
          severity: 'error'
        });
        return;
      }
      
      setDocuments(prev => ({
        ...prev,
        [field]: file
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Base required fields
    const requiredFields = [
      'fullName', 'dateOfBirth', 'gender', 'classLevel', 'address',
      'phone', 'parentName', 'relationship', 'parentPhone'
    ];
    
    // Additional required fields for Grades 3-6
    const isGrade3To6 = ['Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'].includes(formData.classLevel);
    
    // Add UPI and Assessment Number as required for Grades 3-6
    if (isGrade3To6) {
      if (!formData.upiNumber) requiredFields.push('upiNumber');
      if (!formData.assessmentNumber) requiredFields.push('assessmentNumber');
    }
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      setSnackbar({
        open: true,
        message: `Please fill in all required fields: ${missingFields.join(', ')}`,
        severity: 'error'
      });
      return;
    }

    // Validate at least one contact method
    if (!formData.email && !formData.parentEmail) {
      setSnackbar({
        open: true,
        message: 'Please provide either student email or parent email',
        severity: 'error'
      });
      return;
    }

    // Validate required documents
    const requiredDocs = [
      DOCUMENT_TYPES.BIRTH_CERTIFICATE,
      DOCUMENT_TYPES.PASSPORT_PHOTO
    ];
    
    // Add School Clearance as required for Grades 3-6
    if (isGrade3To6) {
      requiredDocs.push(DOCUMENT_TYPES.SCHOOL_CLEARANCE);
    }
    
    const missingDocs = requiredDocs.filter(doc => !documents[doc]);
    if (missingDocs.length > 0) {
      setSnackbar({
        open: true,
        message: `Please upload all required documents: ${missingDocs.join(', ')}`,
        severity: 'error'
      });
      return;
    }

    try {
      setLoading(true);
      const result = await submitAdmission(formData, documents);
      
      if (result.success) {
        setSnackbar({
          open: true,
          message: 'Thank you! Your admission has been successfully submitted!',
          severity: 'success'
        });
        // Reset form
        setFormData({
          fullName: '',
          dateOfBirth: '',
          gender: '',
          classLevel: '',
          upiNumber: '',
          assessmentNumber: '',
          address: '',
          phone: '',
          email: '',
          parentName: '',
          relationship: 'Mother',
          parentPhone: '',
          parentEmail: '',
          parentOccupation: '',
          parentAddress: ''
        });
        setDocuments({
          [DOCUMENT_TYPES.BIRTH_CERTIFICATE]: null,
          [DOCUMENT_TYPES.PARENT_ID]: null,
          [DOCUMENT_TYPES.GUARDIAN_ID]: null,
          [DOCUMENT_TYPES.SCHOOL_CLEARANCE]: null,
          [DOCUMENT_TYPES.PASSPORT_PHOTO]: null
        });
      } else {
        throw new Error(result.error || 'Failed to submit admission');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSnackbar({
        open: true,
        message: error.message || 'An error occurred while submitting the form',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{
        position: 'relative',
        height: { xs: '250px', sm: '350px', md: '400px' },
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/graduation.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        borderRadius: '16px',
        overflow: 'hidden',
        mb: 8,
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.3) 0%, rgba(13, 71, 161, 0.4) 100%)',
          zIndex: 1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)',
          zIndex: 1,
          opacity: 0.1
        }
      }}>
        <Box sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: 3,
          maxWidth: '800px',
          mx: 'auto',
          py: 4
        }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{
              color: 'white',
              fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' },
              fontWeight: '800',
              lineHeight: 1.1,
              mb: 2,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              letterSpacing: { xs: '0.5px', md: '1px' },
              textTransform: 'uppercase'
            }}
          >
            Admission Enquiry
          </Typography>
          <Box sx={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.5)'
          }} />
        </Box>
      </Box>
      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          icon={snackbar.severity === 'success' ? <CheckCircle /> : <ErrorIcon />}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      {/* Welcome Message */}
      <Box sx={{
        maxWidth: '1000px',
        mx: 'auto',
        my: 6,
        p: { xs: 3, md: 6 },
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.02) 0%, rgba(25, 118, 210, 0.05) 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(25, 118, 210, 0.1)',
        boxShadow: '0 8px 32px rgba(25, 118, 210, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
          opacity: 0.8
        }
      }}>
        <School sx={{
          fontSize: '4rem',
          color: '#1976d2',
          mb: 3,
          opacity: 0.9
        }} />
        
        <Typography variant="h4" component="h2" sx={{
          color: '#1a237e',
          fontWeight: '700',
          mb: 3,
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          lineHeight: 1.2,
          letterSpacing: '-0.5px'
        }}>
          Begin Your Educational Journey With Us
        </Typography>
        
        <Typography variant="h6" component="div" sx={{
          color: '#37474f',
          lineHeight: '1.9',
          mb: 3,
          fontSize: { xs: '1.1rem', sm: '1.25rem' },
          maxWidth: '800px',
          mx: 'auto',
          fontWeight: '400'
        }}>
          We're delighted you're considering <strong>Transformer Blessed Junior School</strong> for your child's education. 
          Our dedicated team is here to support you through every step of the admission's journey.
        </Typography>
        
        <Typography variant="h6" component="div" sx={{
          color: '#1a237e',
          lineHeight: '1.8',
          mb: 4,
          fontSize: { xs: '1.1rem', sm: '1.25rem' },
          fontWeight: '500',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, sm: 4 },
          py: 3,
          backgroundColor: 'rgba(25, 118, 210, 0.05)',
          borderRadius: '8px',
          borderLeft: '4px solid #1976d2'
        }}>
          To begin your application, please complete the admission form below:
        </Typography>
        
        <Box sx={{
          width: '100px',
          height: '4px',
          background: 'linear-gradient(90deg, #1976d2, #64b5f6)',
          margin: '20px auto 0',
          borderRadius: '2px',
          opacity: 0.7
        }} />
      </Box>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Student Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Student Information */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom></Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="fullName"
                label="Full Name"
                variant="outlined"
                margin="normal"
                required
                value={formData.fullName}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <Person sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="dateOfBirth"
                label="Date of Birth"
                variant="outlined"
                margin="normal"
                required
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: <CalendarToday sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  label="Gender"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Class Level"
                name="classLevel"
                value={formData.classLevel}
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
              >
                <option value=""></option>
                <option value="Baby Class">Baby Class</option>
                <option value="PP1">PP1</option>
                <option value="PP2">PP2</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                
              </TextField>
            </Grid>
            
            {/* UPI Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="UPI Number *"
                name="upiNumber"
                value={formData.upiNumber}
                onChange={handleChange}
                placeholder="e.g., ABC123-XYZ456"
                inputProps={{
                  // Client-side validation removed to prevent regex errors
                  title: 'Enter UPI number (letters, numbers and hyphens only)'
                }}
              />
            </Grid>
            
            {/* Assessment Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Assessment Number *"
                name="assessmentNumber"
                value={formData.assessmentNumber}
                onChange={handleChange}
                placeholder="e.g., ASS-2023-001"
                inputProps={{
                  // Removed pattern validation to prevent regex errors
                  title: 'Please enter an assessment number (e.g., ASS-2023-001)'
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="address"
                label="Address"
                variant="outlined"
                margin="normal"
                required
                value={formData.address}
                onChange={handleChange}
                multiline
                rows={2}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="phone"
                label="Phone Number"
                variant="outlined"
                margin="normal"
                required
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="email"
                label="Parent/Guardian Email *"
                variant="outlined"
                margin="normal"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            
            {/* Parent/Guardian Information */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Parent/Guardian Information</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="parentName"
                label="Parent/Guardian Name "
                variant="outlined"
                margin="normal"
                required
                value={formData.parentName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Relationship</InputLabel>
                <Select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  label="Relationship"
                >
                  <MenuItem value="Mother">Mother</MenuItem>
                  <MenuItem value="Father">Father</MenuItem>
                  <MenuItem value="Guardian">Guardian</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="parentPhone"
                label="Phone Number"
                variant="outlined"
                margin="normal"
                required
                type="tel"
                value={formData.parentPhone}
                onChange={handleChange}
              />
            </Grid>

            {/* Documents Section */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Required Documents</Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Please upload the following documents (PDF, JPG or PNG max 5MB each):
              </Typography>
            </Grid>

            {/* Document Upload Fields */}
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel shrink>Birth Certificate *</InputLabel>
                <OutlinedInput
                  type="file"
                  id="birth-certificate"
                  inputProps={{
                    accept: 'application/pdf,image/*',
                    'aria-label': 'Birth Certificate',
                  }}
                  onChange={handleFileChange(DOCUMENT_TYPES.BIRTH_CERTIFICATE)}
                  startAdornment={
                    <InputAdornment position="start">
                      <Description />
                    </InputAdornment>
                  }
                />
                {documents[DOCUMENT_TYPES.BIRTH_CERTIFICATE] && (
                  <Typography variant="caption" color="success.main" display="block">
                    {documents[DOCUMENT_TYPES.BIRTH_CERTIFICATE].name}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel shrink>Student's Passport Photo *</InputLabel>
                <OutlinedInput
                  type="file"
                  id="passport-photo"
                  inputProps={{
                    accept: 'image/*',
                    capture: 'environment',
                    'aria-label': 'Passport Photo',
                  }}
                  onChange={handleFileChange(DOCUMENT_TYPES.PASSPORT_PHOTO)}
                  startAdornment={
                    <InputAdornment position="start">
                      <PhotoCamera />
                    </InputAdornment>
                  }
                />
                {documents[DOCUMENT_TYPES.PASSPORT_PHOTO] && (
                  <Typography variant="caption" color="success.main" display="block">
                    {documents[DOCUMENT_TYPES.PASSPORT_PHOTO].name}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel shrink>Parent/Guardian ID *</InputLabel>
                <OutlinedInput
                  type="file"
                  id="parent-id"
                  inputProps={{
                    accept: 'application/pdf,image/*',
                    'aria-label': 'Parent/Guardian ID',
                  }}
                  onChange={handleFileChange(DOCUMENT_TYPES.PARENT_ID)}
                  startAdornment={
                    <InputAdornment position="start">
                      <AttachFile />
                    </InputAdornment>
                  }
                />
                {documents[DOCUMENT_TYPES.PARENT_ID] && (
                  <Typography variant="caption" color="success.main" display="block">
                    {documents[DOCUMENT_TYPES.PARENT_ID].name}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel shrink>School Clearance *</InputLabel>
                <OutlinedInput
                  type="file"
                  id="school-clearance"
                  inputProps={{
                    accept: 'application/pdf,image/*',
                    'aria-label': 'School Clearance',
                  }}
                  onChange={handleFileChange(DOCUMENT_TYPES.SCHOOL_CLEARANCE)}
                  startAdornment={
                    <InputAdornment position="start">
                      <School />
                    </InputAdornment>
                  }
                />
                {documents[DOCUMENT_TYPES.SCHOOL_CLEARANCE] && (
                  <Typography variant="caption" color="success.main" display="block">
                    {documents[DOCUMENT_TYPES.SCHOOL_CLEARANCE].name}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                size="large"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </Button>

              <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
              </Typography>

              <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1, mb: 2 }}>
                By submitting this form you agree to our terms and conditions.
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Admission;

-- Create students table
CREATE TABLE IF NOT EXISTS public.students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  gender TEXT,
  upi_number TEXT UNIQUE,
  assessment_number TEXT,
  admission_date TIMESTAMPTZ DEFAULT NOW(),
  class_level TEXT,
  address TEXT,
  phone_number TEXT,
  email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create parents table
CREATE TABLE IF NOT EXISTS public.parents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  relationship TEXT,
  phone_number TEXT,
  email TEXT,
  occupation TEXT,
  address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create documents table
CREATE TABLE IF NOT EXISTS public.documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  document_type TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_type TEXT,
  file_size INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create admission_status table
CREATE TABLE IF NOT EXISTS public.admission_status (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'approved', 'rejected')),
  notes TEXT,
  reviewed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_students_assessment_number ON public.students(assessment_number);
CREATE INDEX IF NOT EXISTS idx_documents_student_id ON public.documents(student_id);
CREATE INDEX IF NOT EXISTS idx_admission_status_student_id ON public.admission_status(student_id);

-- Drop existing triggers and functions if they exist
DROP TRIGGER IF EXISTS update_students_updated_at ON public.students;
DROP TRIGGER IF EXISTS generate_assessment_number_trigger ON public.students;
DROP TRIGGER IF EXISTS after_student_created ON public.students;

DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
DROP FUNCTION IF EXISTS generate_assessment_number() CASCADE;
DROP FUNCTION IF EXISTS handle_new_admission() CASCADE;

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create or replace the trigger to update the updated_at column
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_students_updated_at') THEN
        CREATE TRIGGER update_students_updated_at
        BEFORE UPDATE ON public.students
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;

-- Drop all existing policies to avoid duplicates
DO $$
BEGIN
    -- Students table policies
    IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'students') THEN
        DROP POLICY IF EXISTS "Enable read access for all users" ON public.students;
        DROP POLICY IF EXISTS "Enable insert for all users" ON public.students;
    END IF;
    
    -- Parents table policies
    IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'parents') THEN
        DROP POLICY IF EXISTS "Enable read access for all users on parents" ON public.parents;
        DROP POLICY IF EXISTS "Enable insert for all users on parents" ON public.parents;
    END IF;
    
    -- Documents table policies
    IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'documents') THEN
        DROP POLICY IF EXISTS "Enable read access for all users on documents" ON public.documents;
        DROP POLICY IF EXISTS "Enable insert for all users on documents" ON public.documents;
    END IF;
    
    -- Admission status policies
    IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'admission_status') THEN
        DROP POLICY IF EXISTS "Enable read access for all users on admission_status" ON public.admission_status;
        DROP POLICY IF EXISTS "Enable insert for all users on admission_status" ON public.admission_status;
        DROP POLICY IF EXISTS "Enable update for authenticated users on admission_status" ON public.admission_status;
    END IF;
END $$;

-- Set up Row Level Security (RLS) policies
-- Students table policies
CREATE POLICY "Enable read access for all users"
  ON public.students FOR SELECT
  USING (true);

-- Allow public inserts for development
-- In production, you should require authentication
CREATE POLICY "Enable insert for all users"
  ON public.students FOR INSERT
  WITH CHECK (true);

-- For production, use this instead:
-- CREATE POLICY "Enable insert for authenticated users"
--   ON public.students FOR INSERT
--   WITH CHECK (auth.role() = 'authenticated');

-- Parents table policies
CREATE POLICY "Enable read access for all users on parents"
  ON public.parents FOR SELECT
  USING (true);

-- Allow public inserts for development
CREATE POLICY "Enable insert for all users on parents"
  ON public.parents FOR INSERT
  WITH CHECK (true);

-- Documents table policies
CREATE POLICY "Enable read access for all users on documents"
  ON public.documents FOR SELECT
  USING (true);

-- Allow public inserts for development
CREATE POLICY "Enable insert for all users on documents"
  ON public.documents FOR INSERT
  WITH CHECK (true);

-- Admission status policies
CREATE POLICY "Enable read access for all users on admission_status"
  ON public.admission_status FOR SELECT
  USING (true);

-- Allow public inserts for development (required for the trigger)
CREATE POLICY "Enable insert for all users on admission_status"
  ON public.admission_status FOR INSERT
  WITH CHECK (true);

-- Enable Row Level Security after all tables are created
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE parents ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE admission_status ENABLE ROW LEVEL SECURITY;

-- Allow updates for authenticated users
CREATE POLICY "Enable update for authenticated users on admission_status"
  ON public.admission_status FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Create a function to generate assessment numbers
CREATE OR REPLACE FUNCTION generate_assessment_number()
RETURNS TRIGGER AS $$
DECLARE
  year_text TEXT;
  seq_num INTEGER;
BEGIN
  -- Get the last two digits of the current year
  year_text := TO_CHAR(NOW(), 'YY');
  
  -- Get the next sequence number for this year
  SELECT COALESCE(MAX(SUBSTRING(assessment_number, 6)::INTEGER), 0) + 1
  INTO seq_num
  FROM public.students
  WHERE assessment_number LIKE 'ASSM' || year_text || '%';
  
  -- Format the assessment number
  NEW.assessment_number := 'ASSM' || year_text || LPAD(seq_num::TEXT, 4, '0');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create or replace the trigger to generate assessment numbers
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'generate_assessment_number_trigger') THEN
        DROP TRIGGER IF EXISTS generate_assessment_number_trigger ON public.students;
        CREATE TRIGGER generate_assessment_number_trigger
        BEFORE INSERT ON public.students
        FOR EACH ROW
        WHEN (NEW.assessment_number IS NULL)
        EXECUTE FUNCTION generate_assessment_number();
    END IF;
END $$;

-- Create a function to handle new student admission
CREATE OR REPLACE FUNCTION handle_new_admission()
RETURNS TRIGGER AS $$
BEGIN
  -- Create an initial admission status record
  INSERT INTO public.admission_status (student_id, status)
  VALUES (NEW.id, 'pending');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create or replace the trigger to handle new student admission
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'after_student_created') THEN
        CREATE TRIGGER after_student_created
        AFTER INSERT ON public.students
        FOR EACH ROW
        EXECUTE FUNCTION handle_new_admission();
    END IF;
END $$;

-- Create a storage bucket for admission documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('admission-docs', 'admission-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies for the admission documents bucket
-- First drop existing policies if they exist
DO $$
BEGIN
    -- Drop all existing storage policies for the admission-docs bucket
    IF EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admission documents are accessible by authenticated users') THEN
        DROP POLICY "Admission documents are accessible by authenticated users" ON storage.objects;
    END IF;
    
    IF EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Authenticated users can upload admission documents') THEN
        DROP POLICY "Authenticated users can upload admission documents" ON storage.objects;
    END IF;
    
    -- Drop the development policies if they exist
    IF EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public access to admission documents') THEN
        DROP POLICY "Public access to admission documents" ON storage.objects;
    END IF;
    
    IF EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public uploads to admission documents') THEN
        DROP POLICY "Public uploads to admission documents" ON storage.objects;
    END IF;
END $$;

-- Then create the policies
-- For development, allow public access to documents
CREATE POLICY "Public access to admission documents"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'admission-docs');

-- Allow public uploads for development
CREATE POLICY "Public uploads to admission documents"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'admission-docs');

-- For production, use these more restrictive policies instead:
-- CREATE POLICY "Admission documents are accessible by authenticated users"
--   ON storage.objects FOR SELECT
--   USING (bucket_id = 'admission-docs' AND auth.role() = 'authenticated');

-- CREATE POLICY "Authenticated users can upload admission documents"
--   ON storage.objects FOR INSERT
--   WITH CHECK (bucket_id = 'admission-docs' AND auth.role() = 'authenticated');

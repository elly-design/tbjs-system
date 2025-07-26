-- Add assessment_number column to students table
ALTER TABLE public.students
ADD COLUMN IF NOT EXISTS assessment_number TEXT;

-- Update any existing rows to set a default value if needed
-- UPDATE public.students SET assessment_number = NULL WHERE assessment_number IS NULL;

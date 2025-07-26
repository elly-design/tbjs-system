-- Add upi_number and assessment_number columns to students table in a single transaction
BEGIN;

-- Add upi_number column
ALTER TABLE public.students
ADD COLUMN IF NOT EXISTS upi_number TEXT;

-- Add assessment_number column
ALTER TABLE public.students
ADD COLUMN IF NOT EXISTS assessment_number TEXT;

-- Add unique constraint for upi_number (if needed)
-- ALTER TABLE public.students
-- ADD CONSTRAINT unique_upi_number UNIQUE (upi_number);

COMMIT;

-- Optional: Update any existing rows if needed
-- UPDATE public.students SET upi_number = NULL WHERE upi_number IS NULL;
-- UPDATE public.students SET assessment_number = NULL WHERE assessment_number IS NULL;

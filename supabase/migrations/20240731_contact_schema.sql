-- First, create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add is_read column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_schema = 'public' 
                 AND table_name = 'contact_submissions' 
                 AND column_name = 'is_read') THEN
    ALTER TABLE public.contact_submissions 
    ADD COLUMN is_read BOOLEAN DEFAULT FALSE;
  END IF;
END $$;

-- Create an index on the email field for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
ON public.contact_submissions(email);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_submissions
-- First drop existing policies if they exist
DROP POLICY IF EXISTS "Enable insert for all users" ON public.contact_submissions;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.contact_submissions;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON public.contact_submissions;

-- Allow public inserts (anyone can submit a contact form)
CREATE POLICY "Enable insert for all users" 
ON public.contact_submissions 
FOR INSERT 
TO public
WITH CHECK (true);

-- Allow authenticated users to read all submissions
CREATE POLICY "Enable read access for authenticated users"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to update read status
CREATE POLICY "Enable update for authenticated users"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (true);

-- Add a comment to the table for documentation
COMMENT ON TABLE public.contact_submissions IS 'Stores contact form submissions from the website';

-- Add comments to columns
COMMENT ON COLUMN public.contact_submissions.name IS 'Name of the person submitting the form';
COMMENT ON COLUMN public.contact_submissions.email IS 'Email address for response';
COMMENT ON COLUMN public.contact_submissions.subject IS 'Subject of the contact request';
COMMENT ON COLUMN public.contact_submissions.message IS 'The actual message content';
COMMENT ON COLUMN public.contact_submissions.created_at IS 'Timestamp when the form was submitted';
COMMENT ON COLUMN public.contact_submissions.is_read IS 'Flag indicating if the submission has been read by an admin';

-- Create or replace the notification function
CREATE OR REPLACE FUNCTION public.notify_new_contact()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify('new_contact', row_to_json(NEW)::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS on_new_contact ON public.contact_submissions;

-- Create the trigger to call the notification function
CREATE TRIGGER on_new_contact
  AFTER INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_contact();

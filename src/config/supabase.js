import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bcdkdfpttzlqlvvixlpg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZGtkZnB0dHpscWx2dml4bHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MjI0NzMsImV4cCI6MjA3MjQ5ODQ3M30.xcsSJTWECvFAwt5bpzdFQJd8ptu7PS38SAYtxLZo4jA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

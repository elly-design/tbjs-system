import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jreaoxxqekvokresukkm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZWFveHhxZWt2b2tyZXN1a2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyOTA4NjYsImV4cCI6MjA2ODg2Njg2Nn0.sLmq4m-ohf0MklPHzC7wVUlKf6po_mVAxBapv1Ma1qM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

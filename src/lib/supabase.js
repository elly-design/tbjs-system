import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jreaoxxqekvokresukkm.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZWFveHhxZWt2b2tyZXN1a2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyOTA4NjYsImV4cCI6MjA2ODg2Njg2Nn0.sLmq4m-ohf0MklPHzC7wVUlKf6po_mVAxBapv1Ma1qM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: false
  }
});

// Newsletter subscription functions
export const subscribeToNewsletter = async (email) => {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select();

    if (error) {
      if (error.code === '23505') { // Unique violation
        return { success: false, error: 'This email is already subscribed.' };
      }
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to subscribe. Please try again.'
    };
  }
};

export const getSubscribers = async () => {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return { success: false, error: error.message };
  }
};

export default supabase;

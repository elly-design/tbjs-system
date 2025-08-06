const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = 'https://jreaoxxqekvokresukkm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZWFveHhxZWt2b2tyZXN1a2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyOTA4NjYsImV4cCI6MjA2ODg2Njg2Nn0.sLmq4m-ohf0MklPHzC7wVUlKf6po_mVAxBapv1Ma1qM';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log('🔍 Testing Supabase connection...');
  
  try {
    // Test connection by fetching server timestamp
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ Error accessing table:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      });
      
      if (error.code === '42P01') { // Table doesn't exist
        console.log('\nℹ️  The "newsletter_subscribers" table does not exist in your Supabase database.');
        console.log('\nTo fix this, you need to:');
        console.log('1. Go to your Supabase dashboard');
        console.log('2. Open the SQL Editor');
        console.log('3. Run this SQL command to create the table:');
        console.log(`
          CREATE TABLE public.newsletter_subscribers (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            email TEXT NOT NULL UNIQUE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
          );
          
          -- Enable Row Level Security
          ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
          
          -- Create policy to allow public inserts (for subscriptions)
          CREATE POLICY "Enable insert for anon users" 
          ON public.newsletter_subscribers
          FOR INSERT 
          TO anon
          WITH CHECK (true);
        `);
      }
      return;
    }
    
    console.log('✅ Successfully connected to Supabase');
    console.log('Table data sample:', data);
    
  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
  }
}

testConnection();

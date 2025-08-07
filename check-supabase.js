const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = 'https://jreaoxxqekvokresukkm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZWFveHhxZWt2b2tyZXN1a2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyOTA4NjYsImV4cCI6MjA2ODg2Njg2Nn0.sLmq4m-ohf0MklPHzC7wVUlKf6po_mVAxBapv1Ma1qM';

console.log('🔌 Initializing Supabase client...');
console.log('URL:', supabaseUrl);
console.log('Key:', supabaseAnonKey ? '********' + supabaseAnonKey.slice(-4) : 'Not provided');

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: false
  }
});

async function testConnection() {
  console.log('\n🔍 Testing Supabase connection...');
  
  try {
    // First, test if we can connect to the Supabase instance
    console.log('\n1. Testing connection to Supabase...');
    const { data: versionData, error: versionError } = await supabase.rpc('version');
    
    if (versionError) {
      if (versionError.code === 'PGRST301') {
        console.log('ℹ️  Successfully connected to Supabase, but could not access RPC functions.');
        console.log('This might be expected if RLS is enabled and no auth token is provided.');
      } else {
        throw versionError;
      }
    } else {
      console.log('✅ Successfully connected to Supabase');
      console.log('PostgreSQL Version:', versionData);
    }

    // Test table access
    console.log('\n2. Testing table access...');
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
        return;
      } else if (error.code === '42P07') { // Table already exists
        console.log('\nℹ️  The "newsletter_subscribers" table already exists. Let\'s check its structure...');
        await checkTableStructure();
        return;
      }
    }
    
    console.log('✅ Successfully accessed newsletter_subscribers table');
    console.log('Table data sample:', data);
    
  } catch (error) {
    console.error('\n❌ Connection test failed with error:');
    console.error('Name:', error.name);
    console.error('Message:', error.message);
    console.error('Code:', error.code);
    console.error('Details:', error.details);
    console.error('Stack:', error.stack);
    
    if (error.message.includes('fetch')) {
      console.log('\n⚠️  Network error detected. Please check:');
      console.log('1. Your internet connection');
      console.log('2. If the Supabase URL is correct');
      console.log('3. If there are any CORS issues (try running in a browser)');
    }
  }
}

// Run the test
console.log('🚀 Starting Supabase connection test...');
async function checkTableStructure() {
  try {
    console.log('\n🔍 Checking table structure...');
    
    // Get table structure information
    const { data: columns, error: columnsError } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type, is_nullable, column_default')
      .eq('table_schema', 'public')
      .eq('table_name', 'newsletter_subscribers');

    if (columnsError) throw columnsError;

    console.log('\n📋 Table structure:');
    console.table(columns);

    // Check if RLS is enabled
    const { data: rls, error: rlsError } = await supabase
      .rpc('get_rls_enabled', { _schema: 'public', _table: 'newsletter_subscribers' });
    
    if (rlsError && rlsError.code !== 'PGRST301') {
      console.log('\n⚠️ Could not verify Row Level Security status:', rlsError.message);
    } else {
      console.log(`\n🔒 Row Level Security is ${rls ? 'ENABLED' : 'DISABLED'}`);
    }

    // Check for any data
    const { data: sampleData, error: sampleError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .limit(5);
    
    if (sampleError) throw sampleError;

    console.log(`\n📊 Found ${sampleData.length} records in the table:`);
    console.table(sampleData);

  } catch (error) {
    console.error('\n❌ Error checking table structure:', error.message);
  }
}

testConnection().then(() => {
  console.log('\n🏁 Test completed');
}).catch(error => {
  console.error('\n🔥 Unhandled error in test:', error);
});

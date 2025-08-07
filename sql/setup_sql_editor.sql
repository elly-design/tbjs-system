-- Create a function to safely execute SELECT queries
CREATE OR REPLACE FUNCTION public.select_query(query text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result json;
  query_type text;
BEGIN
  -- Basic validation to only allow SELECT queries
  query_type := upper(trim(split_part(query, ' ', 1)));
  
  IF query_type != 'SELECT' THEN
    RAISE EXCEPTION 'Only SELECT queries are allowed with this function';
  END IF;
  
  -- Execute the query safely
  EXECUTE 'SELECT COALESCE(array_to_json(array_agg(row_to_json(t))), ''[]''::json) FROM (' || query || ') t' INTO result;
  
  RETURN result;
EXCEPTION WHEN OTHERS THEN
  RAISE EXCEPTION 'Error executing query: %', SQLERRM;
END;
$$;

-- Create a function to execute other SQL statements
CREATE OR REPLACE FUNCTION public.execute_sql(query text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result json;
  query_type text;
  row_count integer;
BEGIN
  -- Get the query type
  query_type := upper(trim(split_part(query, ' ', 1)));
  
  -- Only allow specific query types for safety
  IF query_type NOT IN ('INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER', 'DROP') THEN
    RAISE EXCEPTION 'Query type not allowed: %', query_type;
  END IF;
  
  -- Execute the query
  EXECUTE query;
  GET DIAGNOSTICS row_count = ROW_COUNT;
  
  -- Return the number of affected rows
  RETURN json_build_object(
    'status', 'success',
    'row_count', row_count,
    'query_type', query_type
  );
EXCEPTION WHEN OTHERS THEN
  RAISE EXCEPTION 'Error executing query: %', SQLERRM;
END;
$$;

-- Grant execute permissions to authenticated users
GRANT EXECUTE ON FUNCTION public.select_query(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.execute_sql(text) TO authenticated;

-- Create a view to show table information
CREATE OR REPLACE VIEW public.table_info AS
SELECT 
  table_schema,
  table_name,
  obj_description((table_schema || '.' || table_name)::regclass, 'pg_class') as description,
  (SELECT count(*) FROM information_schema.columns c 
   WHERE c.table_schema = t.table_schema AND c.table_name = t.table_name) as column_count,
  (SELECT count(*) FROM information_schema.table_constraints tc 
   WHERE tc.table_schema = t.table_schema AND tc.table_name = t.table_name 
   AND tc.constraint_type = 'PRIMARY KEY') as has_primary_key
FROM information_schema.tables t
WHERE table_schema = 'public'
AND table_type = 'BASE TABLE';

-- Grant select on the view
GRANT SELECT ON public.table_info TO anon, authenticated;

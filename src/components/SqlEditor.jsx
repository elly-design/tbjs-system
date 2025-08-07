import { useState, useRef, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const SqlEditor = () => {
  const [query, setQuery] = useState('SELECT * FROM newsletter_subscribers LIMIT 10;');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const textareaRef = useRef(null);

  // Load saved queries from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('sqlQueryHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const saveToHistory = (query) => {
    const newHistory = [query, ...history.filter(q => q !== query)].slice(0, 10);
    setHistory(newHistory);
    localStorage.setItem('sqlQueryHistory', JSON.stringify(newHistory));
  };

  const executeQuery = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    setResults(null);

    try {
      // Handle SELECT queries
      if (query.trim().toLowerCase().startsWith('select')) {
        const { data, error } = await supabase.rpc('select_query', {
          query: query
        });
        
        if (error) throw error;
        setResults(data);
      } 
      // Handle INSERT, UPDATE, DELETE
      else {
        const { data, error } = await supabase.rpc('execute_sql', {
          query: query
        });
        
        if (error) throw error;
        setResults([{ status: 'success', message: `Query executed successfully. ${data?.length || 0} rows affected.` }]);
      }
      
      saveToHistory(query);
    } catch (err) {
      console.error('Error executing query:', err);
      setError(err.message || 'An error occurred while executing the query');
    } finally {
      setLoading(false);
    }
  };

  const formatJson = (obj) => {
    return JSON.stringify(obj, null, 2);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      executeQuery();
    }
  };

  const loadQuery = (savedQuery) => {
    setQuery(savedQuery);
    setShowHistory(false);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">SQL Editor</h1>
      
      <div className="mb-4 relative">
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="sql-query" className="block text-sm font-medium text-gray-700">
            Enter your SQL query:
          </label>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
            >
              {showHistory ? 'Hide' : 'Show'} History
            </button>
            <button
              onClick={executeQuery}
              disabled={loading || !query.trim()}
              className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Executing...' : 'Run (Ctrl+Enter)'}
            </button>
          </div>
        </div>

        {showHistory && history.length > 0 && (
          <div className="mb-2 border rounded bg-white shadow-lg absolute z-10 w-full max-h-60 overflow-y-auto">
            {history.map((savedQuery, index) => (
              <div 
                key={index}
                onClick={() => loadQuery(savedQuery)}
                className="p-2 hover:bg-gray-100 cursor-pointer text-sm font-mono overflow-hidden text-ellipsis whitespace-nowrap"
                title={savedQuery}
              >
                {savedQuery.length > 100 ? savedQuery.substring(0, 100) + '...' : savedQuery}
              </div>
            ))}
          </div>
        )}

        <textarea
          id="sql-query"
          ref={textareaRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-40 p-3 font-mono text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="SELECT * FROM your_table;"
          spellCheck="false"
        />
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
          <div className="font-bold">Error</div>
          <div className="whitespace-pre-wrap font-mono text-sm">{error}</div>
        </div>
      )}

      {results && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Results</h2>
            <span className="text-sm text-gray-500">
              {Array.isArray(results) ? `${results.length} rows` : 'Query executed'}
            </span>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-md overflow-auto max-h-96">
            <pre className="p-3 text-sm overflow-auto">
              {typeof results === 'string' 
                ? results 
                : formatJson(results)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SqlEditor;

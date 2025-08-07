import { useNewsletter } from '@/hooks/useNewsletter';

const Newsletter = ({ className = '', buttonText = 'Subscribe' }) => {
  const { email, setEmail, loading, message, handleSubscribe } = useNewsletter();

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <form onSubmit={handleSubscribe} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Subscribing...' : buttonText}
          </button>
        </div>
        
        {message.text && (
          <div 
            className={`p-3 rounded-md text-sm ${
              message.type === 'error' 
                ? 'bg-red-100 text-red-700' 
                : 'bg-green-100 text-green-700'
            }`}
          >
            {message.text}
          </div>
        )}
      </form>
      
      <p className="mt-2 text-xs text-gray-500">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default Newsletter;

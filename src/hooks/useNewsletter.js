import { useState } from 'react';
import { subscribeToNewsletter } from '@/lib/supabase';

export const useNewsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubscribe = async (e) => {
    e?.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' });
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const { success, error } = await subscribeToNewsletter(email);
      
      if (success) {
        setMessage({ 
          text: 'Thank you for subscribing to our newsletter!', 
          type: 'success' 
        });
        setEmail('');
      } else {
        setMessage({ 
          text: error || 'Failed to subscribe. Please try again.', 
          type: 'error' 
        });
      }
    } catch (error) {
      setMessage({ 
        text: 'An unexpected error occurred. Please try again later.', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    loading,
    message,
    handleSubscribe,
  };
};

import React, { useState, useEffect } from 'react';

const WorldQuotes = () => {
  const [quote, setQuote] = useState({ author: '', quoteD: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=hope', {
          headers: {
            'X-Api-Key': 'APgRMyX4tSq0itu8fbCKHg==3F2ZQbhX4xTcsaZP',
          },
        });
        const data = await response.json();
        setQuote({ author: data[0].author, quoteD: data[0].quote });
        setLoading(false);
      } catch (error) {
        setError('No data');
        setLoading(true);
      }
    };
    fetchQuote();
  }, []);
  if (loading) {
    return (
      <p>Please wait .....</p>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="quote-container">
      <h3>
        author:
        {' '}
        {quote.author}
      </h3>
      <h5>
        quote:
        {' '}
        {quote.quoteD}
      </h5>
    </div>
  );
};

export default WorldQuotes;

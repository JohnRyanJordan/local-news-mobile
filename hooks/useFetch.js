import { useState, useEffect } from 'react';

// Fetch hook for retrieving json data
function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [ url ]);
  return [ loading, error, data ];
}

export {
  useFetch
}
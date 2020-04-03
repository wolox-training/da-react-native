import { useState } from 'react';

function useLazyRequest(query) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const request = async values => {
    try {
      setLoading(true);
      const response = await query(values);
      if (response.ok) {
        setLoading(false);
        setData(response);
      } else if (response) {
        setData(response);
        setLoading(false);
      } else {
        throw Error();
      }
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  return [request, { data, loading, error }];
}

export default useLazyRequest;

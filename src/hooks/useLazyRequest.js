import { useState } from 'react';

function useLazyRequest(query) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const request = async values => {
    try {
      setLoading(true);
      const response = await query(values);
      if (response && (response.ok || response.ok === undefined)) {
        setLoading(false);
        setData(response);
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

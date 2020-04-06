import { useState, useEffect } from 'react';

function useRequest(query, params) {
  const [reqParams] = useState(params);
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await query(reqParams);
        if (response?.ok) {
          setData(response);
          setLoading(false);
        } else {
          throw Error();
        }
      } catch {
        setError(true);
        setLoading(false);
      }
    })();
  }, [query, reqParams]);

  return { data, loading, error };
}

export default useRequest;

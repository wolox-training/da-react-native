import { useState, useEffect } from 'react';

function useRequest(query, params) {
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      if (!data) {
        setLoading(true);
        try {
          const response = await query(params);
          if (response && (response.ok || response.ok === undefined)) {
            setData(response);
            setLoading(false);
          } else {
            throw Error();
          }
        } catch {
          setError(true);
          setLoading(false);
        }
      }
    })();
  }, [query, params, data]);

  return { data, loading, error };
}

export default useRequest;

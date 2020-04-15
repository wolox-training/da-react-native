import { useState, useEffect } from 'react';

import { Query, QueryParams } from '@interfaces/api';

function useRequest<T>(query: Query, params?: QueryParams) {
  const [reqParams] = useState(params);
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
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

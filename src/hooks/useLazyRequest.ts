import { useState } from 'react';

import { Query, QueryParams } from '@interfaces/api';

function useLazyRequest<T>(query: Query) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (params: QueryParams) => {
    try {
      setLoading(true);
      const response = await query(params);
      if (response?.ok) {
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

  return [request, { data, loading, error }] as const;
}

export default useLazyRequest;

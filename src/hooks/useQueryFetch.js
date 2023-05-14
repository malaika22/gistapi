import { useEffect, useState } from 'react';

export const useQueryFetch = (service, params) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (!params) return;
    (async function () {
      try {
        setLoading(true);
        const { data } = await service(params);
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [service, params]);

  return { data, loading, error };
};

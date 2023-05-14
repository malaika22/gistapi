import { useEffect, useState } from 'react';

export const useFetch = (service) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await service();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [service]);

  return { data, loading, error };
};

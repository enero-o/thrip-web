import { useEffect, useState } from "react";

const useContentful = <T>(
  fetchFunction: () => Promise<T[]>
): [T[], boolean, Error | null] => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchFunction();
        setData(responseData);
      } catch (error) {
        setError(error as any);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return [data, isLoading, error];
};

export default useContentful;

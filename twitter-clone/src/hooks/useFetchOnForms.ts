import { useState } from 'react';
import { HttpMethod } from '../utils/httpMethod';

export const useFetchOnForms = <T>(
  url: string,
  method: HttpMethod,
  errorMsg?: string,
  body?: never
) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  const fetchData = async () => {
    setIsLoading(() => true);
    setData(() => null);
    setError(() => null);
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const data = await response.json();

      if (!response.ok) throw Error('');

      setData(() => (data as T) || null);
    } catch (error) {
      setError(() => errorMsg || 'Error occured');
    }

    setIsLoading(() => false);
  };

  return { data, isLoading, error, fetchData };
};

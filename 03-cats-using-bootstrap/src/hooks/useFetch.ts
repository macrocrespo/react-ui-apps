import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

type ServerError = Error | AxiosError;

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState<ServerError>();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response?.data;
        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        const errors = error as Error | AxiosError;
        setServerError(errors);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    isLoading,
    apiData,
    serverError,
  };
};

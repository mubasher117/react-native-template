import {SetStateAction, useState} from 'react';
import axiosInstance from '../api/service';

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<SetStateAction<string | null>>(null);
  const [loading, setLoading] = useState(false);

  const callFetch = () => {
    const fetchData = async () => {
      setData(null);
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get(url);
        setData(response.data);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  };

  return {data, error, loading, callFetch};
};

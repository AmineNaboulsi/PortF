import { useQuery } from '@tanstack/react-query';
import axiosClient from "@/lib/axiosClient";

const useAxiosCached = (key, url, options = {}) => {
  const fetchData = async () => {
    const { data } = await axiosClient.get(url, options);
    return data;
  };

  return useQuery({
    queryKey: [key, options], 
    queryFn: fetchData
  });};

export default useAxiosCached;

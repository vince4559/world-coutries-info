import useSWR from "swr";
import axios from "axios";

// not working as proper 
const fetcher = (name) => axios.get(`${'https://restcountries.com/v3.1/name'}/${name}`).then(res => res?.data);

 export const useFetcher = () => {
const { data, error } = useSWR( fetcher(), {
  refreshInterval: 0,
  revalidateOnFocus: true,
  revalidateIfStale: true,
  revalidateOnReconnect: true,
  errorRetryInterval:2,
});
  return {
    data,
    error,
    isLoading: !data && !error,
  }
}
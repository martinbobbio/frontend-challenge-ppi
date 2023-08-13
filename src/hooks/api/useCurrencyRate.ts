// Constants
import { API, ResponseCurrencyRate } from '@/constants';
// Libreries
import useSWR from 'swr';

// Types
type FetcherFn<Data> = () => Promise<Data>;

/**
 * Hook fetch data with axios and swr sending request for rate to VAT API.
 */
const useCurrencyRate = <Data = ResponseCurrencyRate>(ticker: string) => {
  const uri = `/rates`;
  const fetcher: FetcherFn<Data> = async () => {
    const response = await API.get(uri, {
      params: { base: ticker },
    });
    return response.data;
  };
  return useSWR(`${uri}/${ticker}`, fetcher);
};

export default useCurrencyRate;

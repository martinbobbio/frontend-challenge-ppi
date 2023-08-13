// Constants
import { API, Currency } from '@/constants';
// Utils
import { getCurrencyExternalSite } from '@/utils';
// Libreries
import useSWR from 'swr';

// Types
type FetcherFn<Data> = () => Promise<Data>;

/**
 * Hook fetch data with axios and swr sending request for list to VAT API.
 */
const useCurrencies = () => {
  const uri = `/currencies`;
  const fetcher: FetcherFn<Currency[]> = async () => {
    const response = await API.get(uri);
    const currencies: Currency[] = Object.keys(response.data).map((key) => ({
      ticker: key,
      externalSite: getCurrencyExternalSite(key, response.data[key].name),
      ...response.data[key],
    }));
    return currencies;
  };
  return useSWR(`${uri}`, fetcher);
};

export default useCurrencies;

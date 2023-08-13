// Constants
import { Currency } from '@/constants';

/**
 * Function that obtain a currency by ticker
 *
 * @param currencies for searching the currency
 * @param ticker for the calculate the result
 * @return string
 */
export default (currencies: Currency[], ticker: string): Currency => {
  const currency = currencies.find((c) => c.ticker === ticker);
  return currency as Currency;
};

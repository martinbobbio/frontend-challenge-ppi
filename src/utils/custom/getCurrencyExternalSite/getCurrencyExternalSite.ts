// Constants
import { CONFIG } from '@/constants';

/**
 * Function that obtain a external site for the currency
 *
 * @param ticker for parse the external site
 * @param name for parse the external site
 * @return string
 */
export default (ticker: string, name: string): string => {
  const url = `${CONFIG.sites.currency}`;
  const uri = `${ticker.toLowerCase()}-${name
    .toLocaleLowerCase()
    .replace(' ', '-')}`;
  return `${url}/${uri}`;
};

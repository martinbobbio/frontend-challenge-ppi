import BigNumber from 'bignumber.js';
import formatNumber from '../formatNumber/formatNumber';

/**
 * Function that format a number for example 0.3242 to 0.32
 *
 * @param value for miltplication
 * @param rate for the calculate the result
 * @return string
 */
export default (value: string, rate: number): string => {
  const num = new BigNumber(value);
  const result = num.times(rate);
  if (result.isNaN()) return '';
  return formatNumber(result.toString(), 6);
};

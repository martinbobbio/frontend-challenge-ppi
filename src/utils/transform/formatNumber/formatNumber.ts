import BigNumber from 'bignumber.js';

/**
 * Function that format and remove zeros unnecesaries with a regex
 *
 * @param value for format the number
 * @return string
 */
const formatZeros = (value: string): string => {
  return value.replace(/(\.\d*?[1-9])0+$/, '$1').replace(/\.0+$/, '.00');
};

/**
 * Function that format a number for example 0.3242 to 0.32
 *
 * @param value for format the number
 * @param decimalPlaces for the decimals
 * @return string
 */
export default (value: number | string, decimalPlaces: number): string => {
  const num = new BigNumber(value);
  if (num.isNaN()) return '';
  return formatZeros(num.toFormat(decimalPlaces));
};

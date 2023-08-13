import BigNumber from 'bignumber.js';

/**
 * Function that validate strings are numbers
 *
 * @param value for the validation
 * @return boolean
 */
export default (value: string): boolean => {
  try {
    const num = new BigNumber(value);
    if (num.isPositive() && !num.isNaN()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

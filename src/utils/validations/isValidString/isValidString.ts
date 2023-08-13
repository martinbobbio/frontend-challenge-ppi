/**
 * Function that validate are a correct string for a input number for empty strings and character decimals
 *
 * @param value for the validation
 * @return boolean
 */
export default (value: string): boolean => {
  return (
    value === '' ||
    (value.endsWith('.') && (value.match(/\./g) || []).length === 1)
  );
};

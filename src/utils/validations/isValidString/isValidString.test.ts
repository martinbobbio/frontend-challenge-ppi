import isValidString from './isValidString';
import { expect, test, describe } from 'vitest';

describe('isValidString', () => {
  test('Should handle correct value with false', () => {
    const result = isValidString('Lorem ipsum');
    expect(result).toBeFalsy();
  });

  test('Should handle correct value with empty value', () => {
    const result = isValidString('Lorem ipsum');
    expect(result).toBeFalsy();
  });

  test('Should handle correct value with negative number', () => {
    const result = isValidString('-200');
    expect(result).toBeFalsy();
  });

  test('Should handle correct value with false decimals', () => {
    const result = isValidString('1,334');
    expect(result).toBeFalsy();
  });

  test('Should handle correct value with some dots', () => {
    const result = isValidString('1.334.3');
    expect(result).toBeFalsy();
  });
});

import isValidNumberPositive from './isValidNumberPositive';
import { expect, test, describe } from 'vitest';

describe('isValidNumberPositive', () => {
  test('Should handle correct number value with true', () => {
    const result = isValidNumberPositive('449');
    expect(result).toBeTruthy();
  });

  test('Should handle correct value with false', () => {
    const result = isValidNumberPositive('300k');
    expect(result).toBeFalsy();
  });

  test('Should handle correct value with empty value', () => {
    const result = isValidNumberPositive('');
    expect(result).toBeFalsy();
  });

  test('Should handle correct value with negative number', () => {
    const result = isValidNumberPositive('-200');
    expect(result).toBeFalsy();
  });

  test('Should handle correct number value with symbols', () => {
    const result = isValidNumberPositive('449-2');
    expect(result).toBeFalsy();
  });

  test('Should handle correct value with decimals', () => {
    const result = isValidNumberPositive('1.34');
    expect(result).toBeTruthy();
  });

  test('Should handle correct value with false decimals', () => {
    const result = isValidNumberPositive('1,334');
    expect(result).toBeFalsy();
  });

  test('Should handle correct value with some dots', () => {
    const result = isValidNumberPositive('1.334.3');
    expect(result).toBeFalsy();
  });
});

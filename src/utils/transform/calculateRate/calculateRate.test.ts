import calculateRate from './calculateRate';
import { expect, test, describe } from 'vitest';

describe('calculateRate', () => {
  test('Should handle correct value with normal values', () => {
    const result = calculateRate('10', 5);
    expect(result).toBe('50.00');
  });

  test('Should handle correct value with strange values', () => {
    const result = calculateRate('Lorem', 10);
    expect(result).toBe('');
  });

  test('Should handle correct value with empty values', () => {
    const result = calculateRate('', 2);
    expect(result).toBe('');
  });

  test('Should handle correct value with zero rate', () => {
    const result = calculateRate('250', 0);
    expect(result).toBe('0.00');
  });

  test('Should handle correct value with decimals rate', () => {
    const result = calculateRate('320.242', 6.59);
    expect(result).toBe('2,110.39478');
  });

  test('Should handle correct value with small rate', () => {
    const result = calculateRate('0.0002134100430000123421', 4);
    expect(result).toBe('0.000854');
  });

  test('Should handle correct value with big rate', () => {
    const result = calculateRate('3201238362113213.242', 1.59);
    expect(result).toBe('5,089,968,995,760,009.05478');
  });
});

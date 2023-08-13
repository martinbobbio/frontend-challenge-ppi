import formatNumber from './formatNumber';
import { expect, test, describe } from 'vitest';

describe('formatNumber', () => {
  test('Should handle correct number with normal characters', () => {
    const result = formatNumber('4', 2);
    expect(result).toBe('4.00');
  });

  test('Should handle correct number with empty value', () => {
    const result = formatNumber('', 2);
    expect(result).toBe('');
  });

  test('Should handle correct number with zero decimals', () => {
    const result = formatNumber('103', 0);
    expect(result).toBe('103');
  });

  test('Should handle correct number with normal characters and round zeros', () => {
    const result = formatNumber('4', 5);
    expect(result).toBe('4.00');
  });

  test('Should handle correct number with normal characters and not rounding zeros', () => {
    const result = formatNumber('4.004535', 5);
    expect(result).toBe('4.00454');
  });

  test('Should handle correct number with comas and dots', () => {
    const result = formatNumber('100500200.275', 2);
    expect(result).toBe('100,500,200.28');
  });

  test('Should handle correct number with small value', () => {
    const result = formatNumber('0.003404324123', 9);
    expect(result).toBe('0.003404324');
  });

  test('Should handle correct number with big value', () => {
    const result = formatNumber('4343445309283800189313.3927361829111', 7);
    expect(result).toBe('4,343,445,309,283,800,189,313.3927362');
  });
});

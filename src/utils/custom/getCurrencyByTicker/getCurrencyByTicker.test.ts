import getCurrencyByTicker from './getCurrencyByTicker';
import { expect, test, describe } from 'vitest';

describe('getCurrencyByTicker', () => {
  test('Should handle correct value with normal values', () => {
    const result = getCurrencyByTicker([], 'USD');
    expect(result).toBe('50.00');
  });
});

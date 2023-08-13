import getCurrencyExternalSite from './getCurrencyExternalSite';
import { expect, test, describe } from 'vitest';

describe('getCurrencyExternalSite', () => {
  test('Should handle correct value with normal values', () => {
    const result = getCurrencyExternalSite('USD', 'USD');
    expect(result).toBe('USD');
  });
});

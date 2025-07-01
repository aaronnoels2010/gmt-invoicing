import Big from 'big.js';

export function toDecimalNumber(value: number) {
  return Big(value);
}

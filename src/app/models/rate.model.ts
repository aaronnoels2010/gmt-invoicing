import { toDecimalNumber } from '@utils/number.util';

export type RateBlock = {
  start: number; // hour in 24h format
  end: number;
  rate: number;
};

export type RateSchedule = {
  [day: string]: RateBlock[];
};

export const rateSchedule: (hourRate: number) => RateSchedule = (
  hourRate: number
) => ({
  Monday: [
    {
      start: 0,
      end: 7,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
    { start: 7, end: 19, rate: hourRate },
    {
      start: 19,
      end: 24,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
  ],
  Tuesday: [
    {
      start: 0,
      end: 7,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
    { start: 7, end: 19, rate: hourRate },
    {
      start: 19,
      end: 24,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
  ],
  Wednesday: [
    {
      start: 0,
      end: 7,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
    { start: 7, end: 19, rate: hourRate },
    {
      start: 19,
      end: 24,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
  ],
  Thursday: [
    {
      start: 0,
      end: 7,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
    { start: 7, end: 19, rate: hourRate },
    {
      start: 19,
      end: 24,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
  ],
  Friday: [
    {
      start: 0,
      end: 7,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
    { start: 7, end: 19, rate: hourRate },
    {
      start: 19,
      end: 24,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
  ],
  Saturday: [
    {
      start: 0,
      end: 7,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
    {
      start: 7,
      end: 19,
      rate: toDecimalNumber(hourRate).times(1.26).toNumber(),
    }, // 1.5x rate for Saturday daytime
    {
      start: 19,
      end: 24,
      rate: toDecimalNumber(hourRate).times(1.35).toNumber(),
    },
  ],
  Sunday: [
    {
      start: 0,
      end: 7,
      rate: toDecimalNumber(hourRate).times(1.56).toNumber(),
    },
    {
      start: 7,
      end: 19,
      rate: toDecimalNumber(hourRate).times(1.56).toNumber(),
    },
    {
      start: 19,
      end: 24,
      rate: toDecimalNumber(hourRate).times(1.56).toNumber(),
    },
  ],
});

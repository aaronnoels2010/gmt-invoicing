export function getTimeDiff(date1: number, date2: number): TimeDiffDto {
  if (isNaN(date1) || isNaN(date2)) {
    console.error('One or both of the dates are invalid.');
    return { hours: 0, minutes: 0 };
  }

  const diffInMs = Math.abs(date2 - date1);
  const totalMinutes = Math.floor(diffInMs / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return {
    hours: hours,
    minutes: minutes,
  };
}

export type TimeDiffDto = {
  hours: number;
  minutes: number;
};

export function getEpoch(date: Date): number {
  return date.getTime();
}

export function getEpochAndResetSeconds(date: Date): number {
  date.setSeconds(0, 0); // Reset seconds and milliseconds to zero
  return date.getTime();
}

export function getBeDateFormatted(date: Date): string {
  return (
    date.getDate().toString().padStart(2, '0') +
    '/' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '/' +
    date.getFullYear().toString().padStart(4, '0')
  );
}

export function getBeTimeFormatted(date: Date): string {
  return (
    date.getHours().toString().padStart(2, '0') +
    ':' +
    date.getMinutes().toString().padStart(2, '0')
  );
}

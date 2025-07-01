import { Injectable } from '@angular/core';
import { ProjectLine } from '@models/project-line.model';
import { RateSchedule } from '@models/rate.model';
import { getTimeDiff, getEpochAndResetSeconds } from '@utils/date.util';
import { toDecimalNumber } from '@utils/number.util';
import Big from 'big.js';

@Injectable({
  providedIn: 'root',
})
export class ProjectLineCostService {
  constructor() {}

  calculateTotalCost(pricePerHour: number, projectLine: ProjectLine) {
    const timeWorked = getTimeDiff(
      getEpochAndResetSeconds(projectLine.startTime),
      getEpochAndResetSeconds(projectLine.endTime)
    );

    const totalCost =
      pricePerHour * timeWorked.hours +
      (pricePerHour / 60) * timeWorked.minutes;
  }

  calculateCostBasedOnRateString(
    start: Date,
    end: Date,
    rateSchedule: RateSchedule
  ): string {
    return this.calculateCostBasedOnRate(start, end, rateSchedule).toFixed(2);
  }

  calculateCostBasedOnRate(
    start: Date,
    end: Date,
    rateSchedule: RateSchedule
  ): number {
    let totalCost = Big(0);
    const msInHour = 1000 * 60 * 60;

    let current = new Date(start);
    current.setSeconds(0, 0);
    end.setSeconds(0, 0); // Set seconds and milliseconds to zero for accurate hourly calculations

    while (getEpochAndResetSeconds(current) < getEpochAndResetSeconds(end)) {
      const currentDay = current.toLocaleDateString('en-US', {
        weekday: 'long',
      });
      const currentHour = current.getHours() + current.getMinutes() / 60;

      const todaySchedule = rateSchedule[currentDay];
      if (!todaySchedule) {
        current.setHours(current.getHours() + 1);
        continue;
      }

      const rateBlock = todaySchedule.find(
        (block) => currentHour >= block.start && currentHour < block.end
      );

      if (!rateBlock) {
        current.setHours(current.getHours() + 1);
        continue;
      }

      // Compute when this rate block ends (in Date form)
      const endOfBlock = new Date(current);
      endOfBlock.setHours(Math.min(rateBlock.end, 24), 0, 0, 0);

      const nextHour = new Date(
        Math.min(
          getEpochAndResetSeconds(end),
          getEpochAndResetSeconds(endOfBlock)
        )
      );
      nextHour.setSeconds(0, 0);
      const hoursInBlock = toDecimalNumber(getEpochAndResetSeconds(nextHour))
        .minus(getEpochAndResetSeconds(current))
        .div(msInHour);

      totalCost = totalCost.add(
        hoursInBlock.times(toDecimalNumber(rateBlock.rate))
      );
      current = nextHour;
    }

    return totalCost.toNumber();
  }

  calculateTotalHoursWorked(start: Date, end: Date): number {
    const diffMs =
      getEpochAndResetSeconds(end) - getEpochAndResetSeconds(start); // difference in milliseconds
    const hours = diffMs / (1000 * 60 * 60);
    return hours;
  }
}

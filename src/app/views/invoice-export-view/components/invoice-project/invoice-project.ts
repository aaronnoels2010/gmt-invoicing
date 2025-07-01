import { Component, input } from '@angular/core';
import { ProjectLine } from '@models/project-line.model';
import { Project } from '@models/project.model';
import { rateSchedule } from '@models/rate.model';
import { CoreModule } from '@modules/core/core-module';
import { ProjectLineCostService } from '@services/project-line-cost.service';
import { getBeDateFormatted, getBeTimeFormatted } from '@utils/date.util';

@Component({
  selector: 'app-invoice-project',
  imports: [CoreModule],
  templateUrl: './invoice-project.html',
  styleUrl: './invoice-project.css',
})
export class InvoiceProject {
  project = input<Project>(new Project(''));

  constructor(private projectLineCostService: ProjectLineCostService) {}

  formatDate(date: Date): string {
    return getBeDateFormatted(date);
  }

  formatTime(date: Date): string {
    return getBeTimeFormatted(date);
  }

  calculateTotalHoursWorked(projectLine: ProjectLine): string {
    var hoursWorked = this.projectLineCostService.calculateTotalHoursWorked(
      projectLine.startTime,
      projectLine.endTime
    );
    return hoursWorked.toFixed(2);
  }

  calculateTotalCost(projectLine: ProjectLine): string {
    return this.projectLineCostService.calculateCostBasedOnRateString(
      projectLine.startTime,
      projectLine.endTime,
      rateSchedule(55)
    );
  }
}

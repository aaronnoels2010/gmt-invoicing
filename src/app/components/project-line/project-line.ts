import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@modules/core/core-module';
import { ProjectLine as ProjectLineType } from '@models/project-line.model';
import { InvoiceService } from '@services/invoice.service';
import { ProjectLineCostService } from '@services/project-line-cost.service';
import { rateSchedule } from '@models/rate.model';

@Component({
  selector: 'app-project-line',
  imports: [FormsModule, CoreModule],
  templateUrl: './project-line.html',
  styleUrl: './project-line.css',
})
export class ProjectLineComponent {
  @Input()
  projectLine: ProjectLineType = new ProjectLineType('');

  constructor(
    private invoiceService: InvoiceService,
    private projectLineCostService: ProjectLineCostService
  ) {
    console.log(this.projectLine);
  }

  toggleHoliday() {
    this.projectLine.isHoliday = !this.projectLine.isHoliday;
    this.projectLineCostService.calculateTotalCost(55, this.projectLine);
  }

  copyProjectLine() {
    this.invoiceService.duplicateProjectLine(this.projectLine);
  }

  deleteProjectLine() {
    var hasConfirmed = confirm(
      'Are you sure you want to delete this project line? This action cannot be undone.'
    );
    if (hasConfirmed) this.invoiceService.deleteProjectLine(this.projectLine);
  }

  moveProjectLineUp() {
    this.invoiceService.moveProjectLineUp(this.projectLine);
  }

  moveProjectLineDown() {
    this.invoiceService.moveProjectLineDown(this.projectLine);
  }

  calculateTotalCost(): string {
    return this.projectLineCostService.calculateCostBasedOnRateString(
      this.projectLine.startTime,
      this.projectLine.endTime,
      rateSchedule(55)
    );
  }
}

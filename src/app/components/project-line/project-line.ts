import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@modules/core/core-module';
import { ProjectLine as ProjectLineType } from '@models/project-line.model';
import { InvoiceService } from '@services/invoice.service';

@Component({
  selector: 'app-project-line',
  imports: [FormsModule, CoreModule],
  templateUrl: './project-line.html',
  styleUrl: './project-line.css',
})
export class ProjectLine {
  @Input()
  projectLine: ProjectLineType = new ProjectLineType('');

  constructor(private invoiceService: InvoiceService) {}

  public handleClick() {
    console.log('Invoice line clicked: ' + this.projectLine.startTime);
  }

  toggleHoliday() {
    this.projectLine.isHoliday = !this.projectLine.isHoliday;
  }

  copyProjectLine() {
    console.log(
      'Copying project line:',
      this.projectLine.startTime.toISOString()
    );
    console.log(
      'Copying project line:',
      this.projectLine.endTime.toISOString()
    );
    console.log('Copying project line:', this.projectLine.date.toISOString());
    this.invoiceService.duplicateProjectLine(this.projectLine);
  }

  deleteProjectLine() {
    var hasConfirmed = confirm(
      'Are you sure you want to delete this project line? This action cannot be undone.'
    );
    if (hasConfirmed) this.invoiceService.deleteProjectLine(this.projectLine);
  }

  moveProjectLineUp() {
    console.log('Moving project line up:', this.projectLine.startTime);
    this.invoiceService.moveProjectLineUp(this.projectLine);
  }

  moveProjectLineDown() {
    console.log('Moving project line down:', this.projectLine.startTime);
    this.invoiceService.moveProjectLineDown(this.projectLine);
  }
}

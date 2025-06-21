import { Component } from '@angular/core';
import { CoreModule } from '@modules/core/core-module';
import { ProjectLine } from '@components/project-line/project-line';
import { InvoiceService } from '@services/invoice.service';
import { Invoice } from '@models/invoice.model';

@Component({
  selector: 'app-project',
  imports: [CoreModule, ProjectLine],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  invoice: Invoice;

  constructor(private invoiceService: InvoiceService) {
    this.invoice = this.invoiceService.invoice;
  }

  addProject() {
    this.invoiceService.addProject();
  }

  deleteProject(id: string) {
    this.invoiceService.deleteProject(id);
  }
}

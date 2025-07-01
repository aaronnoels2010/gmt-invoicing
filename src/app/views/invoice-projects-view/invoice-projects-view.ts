import { Component, Signal } from '@angular/core';
import { ProjectComponent } from '@components/project/project';
import { Invoice } from '@models/invoice.model';
import { CoreModule } from '@modules/core/core-module';
import { ROUTES } from '@routes/index';
import { InvoiceService } from '@services/invoice.service';

@Component({
  selector: 'app-invoice-projects-view',
  imports: [CoreModule, ProjectComponent],
  templateUrl: './invoice-projects-view.html',
  styleUrl: './invoice-projects-view.css',
})
export class InvoiceProjectsView {
  invoice: Signal<Invoice>;
  homeUrl = ROUTES.home;
  invoiceDetailUrl = ROUTES.invoice.details;

  constructor(private invoiceService: InvoiceService) {
    this.invoice = this.invoiceService.invoiceSignal.asReadonly();
  }

  addProject() {
    this.invoiceService.addProject();
  }

  deleteProject(id: string) {
    this.invoiceService.deleteProject(id);
  }
}

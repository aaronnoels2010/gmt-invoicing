import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '@components/input/input';
import { InvoiceDetail } from '@models/invoice-detail.model';
import { CoreModule } from '@modules/core/core-module';
import { ROUTES } from '@routes/index';
import { InvoiceService } from '@services/invoice.service';

@Component({
  selector: 'app-invoice-detail-view',
  imports: [CoreModule, InputComponent, FormsModule],
  templateUrl: './invoice-detail-view.html',
  styleUrl: './invoice-detail-view.css',
})
export class InvoiceDetailView {
  invoiceProjectsUrl = ROUTES.invoice.projects;
  invoiceExportUrl = ROUTES.invoice.export;
  invoiceDetail: InvoiceDetail = new InvoiceDetail();

  constructor(private invoiceService: InvoiceService) {
    this.invoiceDetail = this.invoiceService.invoiceSignal().detail;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    // For Ctrl+E (or Cmd+E on Mac)
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'e') {
      event.preventDefault(); // Prevent browser's default action
      this.exportData();
    }
  }

  exportData() {
    // Your export logic here
    this.invoiceService.exportToJsonFile();
  }
}

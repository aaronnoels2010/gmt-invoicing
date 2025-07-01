import { Component } from '@angular/core';
import { CoreModule } from '@modules/core/core-module';
import { ROUTES } from '@routes/index';
import { InvoiceService } from '@services/invoice.service';

@Component({
  selector: 'app-home-view',
  imports: [CoreModule],
  templateUrl: './home-view.html',
  styleUrl: './home-view.css',
})
export class HomeView {
  invoiceProjectsUrl = ROUTES.invoice.projects;

  constructor(private invoiceService: InvoiceService) {}

  downloadInvoice() {
    this.invoiceService.exportToJsonFile();
  }

  importInvoice(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.invoiceService.importFromJsonFile(file);
    }
  }
}

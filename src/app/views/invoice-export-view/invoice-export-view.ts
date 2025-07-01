import { Component, Signal } from '@angular/core';
import { Invoice } from '@models/invoice.model';
import { CoreModule } from '@modules/core/core-module';
import { InvoiceService } from '@services/invoice.service';
import { InvoiceSenderSummary } from './components/invoice-sender-summary/invoice-sender-summary';
import { InvoiceReceiverSummary } from './components/invoice-receiver-summary/invoice-receiver-summary';
import { InvoiceFooter } from './components/invoice-footer/invoice-footer';
import { InvoiceInstructions } from './components/invoice-instructions/invoice-instructions';
import { InvoiceProject } from './components/invoice-project/invoice-project';
import { InvoiceTotal } from './components/invoice-total/invoice-total';

@Component({
  selector: 'app-invoice-export-view',
  imports: [
    CoreModule,
    InvoiceSenderSummary,
    InvoiceReceiverSummary,
    InvoiceInstructions,
    InvoiceFooter,
    InvoiceProject,
    InvoiceTotal,
  ],
  templateUrl: './invoice-export-view.html',
  styleUrl: './invoice-export-view.css',
})
export class InvoiceExportView {
  invoice: Signal<Invoice>;

  constructor(private invoiceService: InvoiceService) {
    this.invoice = this.invoiceService.invoiceSignal;
  }
}

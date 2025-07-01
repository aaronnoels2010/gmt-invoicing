import { Component, computed, input } from '@angular/core';
import { InvoiceReceiver } from '@models/invoice-receiver.model';
import { InvoiceService } from '@services/invoice.service';
import { getBeDateFormatted } from '@utils/date.util';

@Component({
  selector: 'app-invoice-receiver-summary',
  imports: [],
  templateUrl: './invoice-receiver-summary.html',
  styleUrl: './invoice-receiver-summary.css',
})
export class InvoiceReceiverSummary {
  receiver = input<InvoiceReceiver>(new InvoiceReceiver());
  dateBeFormatted = computed(() =>
    getBeDateFormatted(this.invoiceService.invoiceSignal().detail.date)
  );

  constructor(private invoiceService: InvoiceService) {
    // Initialization logic if needed
  }
}

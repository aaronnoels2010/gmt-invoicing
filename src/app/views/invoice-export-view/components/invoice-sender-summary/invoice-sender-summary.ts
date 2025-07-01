import { Component, input } from '@angular/core';
import { InvoiceSender } from '@models/invoice-sender.model';

@Component({
  selector: 'app-invoice-sender-summary',
  imports: [],
  templateUrl: './invoice-sender-summary.html',
  styleUrl: './invoice-sender-summary.css',
})
export class InvoiceSenderSummary {
  sender = input<InvoiceSender>(new InvoiceSender());
}

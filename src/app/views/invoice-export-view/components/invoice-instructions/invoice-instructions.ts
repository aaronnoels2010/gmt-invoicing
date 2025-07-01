import { Component, input } from '@angular/core';
import { CoreModule } from '@modules/core/core-module';

@Component({
  selector: 'app-invoice-instructions',
  imports: [CoreModule],
  templateUrl: './invoice-instructions.html',
  styleUrl: './invoice-instructions.css',
})
export class InvoiceInstructions {
  accountNumber = input('');
  invoiceNumber = input('');
}

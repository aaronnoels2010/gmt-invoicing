import { InvoiceReceiver } from '@models/invoice-receiver.model';
import { InvoiceSender } from '@models/invoice-sender.model';

export class InvoiceDetail {
  public id: string;
  public invoiceNumber: string = '';
  public date: Date = new Date();
  get dateString(): string {
    return (
      this.date.getFullYear().toString().padStart(4, '0') +
      '-' +
      (this.date.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      this.date.getDate().toString().padStart(2, '0')
    );
  }
  set dateString(value: string) {
    console.log(value);
    if (!value) return;
    const dateParts = value.split('-');
    if (dateParts.length != 3) return;
    this.date = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
      0,
      0
    );
  }

  public invoiceDate: Date = new Date();
  get invoiceDateString(): string {
    return (
      this.invoiceDate.getFullYear().toString().padStart(4, '0') +
      '-' +
      (this.invoiceDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      this.invoiceDate.getDate().toString().padStart(2, '0')
    );
  }
  set invoiceDateString(value: string) {
    console.log(value);
    if (!value) return;
    const dateParts = value.split('-');
    if (dateParts.length != 3) return;
    this.invoiceDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
      0,
      0
    );
  }

  public sender: InvoiceSender = new InvoiceSender();
  public receiver: InvoiceReceiver = new InvoiceReceiver();

  constructor() {
    this.id = crypto.randomUUID();
  }

  static fromObject(invoiceDetail: any) {
    const newInvoiceDetail = new InvoiceDetail();
    newInvoiceDetail.id = invoiceDetail.id;
    newInvoiceDetail.invoiceNumber = invoiceDetail.invoiceNumber;
    newInvoiceDetail.date = new Date(invoiceDetail.date);
    newInvoiceDetail.invoiceDate = new Date(invoiceDetail.invoiceDate);
    newInvoiceDetail.sender = InvoiceSender.fromObject(invoiceDetail.sender);
    newInvoiceDetail.receiver = InvoiceReceiver.fromObject(
      invoiceDetail.receiver
    );
    return newInvoiceDetail;
  }
}

export class InvoiceReceiver {
  public address: string = '';
  public name: string = '';

  constructor() {
    this.address = '';
    this.name = '';
  }
  static fromObject(json: any): InvoiceReceiver {
    const receiver = new InvoiceReceiver();
    receiver.address = json.address;
    receiver.name = json.name;
    return receiver;
  }
}

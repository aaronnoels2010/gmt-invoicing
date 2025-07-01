export class InvoiceSender {
  public name: string = '';
  public address: string = '';
  public email: string = '';
  public phone: string = '';
  public enterpriseNumber: string = '';
  public accountNumber: string = '';

  constructor() {
    this.name = '';
    this.address = '';
    this.email = '';
    this.phone = '';
    this.enterpriseNumber = '';
    this.accountNumber = '';
  }

  static fromObject(json: any): InvoiceSender {
    const sender = new InvoiceSender();
    sender.name = json.name;
    sender.address = json.address;
    sender.email = json.email;
    sender.phone = json.phone;
    sender.enterpriseNumber = json.enterpriseNumber;
    sender.accountNumber = json.accountNumber;
    return sender;
  }
}

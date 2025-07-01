import { Project } from '@models/project.model';
import { InvoiceDetail } from './invoice-detail.model';

export class Invoice {
  public id: string;
  public projects: Project[] = [];
  public detail: InvoiceDetail = new InvoiceDetail();

  constructor() {
    this.id = crypto.randomUUID();
    this.projects = [new Project('')];
  }

  static fromObject(json: any): Invoice {
    const invoice = new Invoice();
    invoice.id = json.id;
    invoice.projects = json.projects.map((project: any) =>
      Project.fromObject(project)
    );
    invoice.detail = InvoiceDetail.fromObject(json.detail);
    return invoice;
  }
}

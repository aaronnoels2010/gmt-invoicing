import { Project } from '@models/project.model';

export class Invoice {
  public id: string;
  public projects: Project[] = [];

  constructor() {
    this.id = crypto.randomUUID();
    this.projects = [new Project('')];
  }
}

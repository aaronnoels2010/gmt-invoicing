import { ProjectLine } from '@models/project-line.model';

export class Project {
  public id: string = crypto.randomUUID(); // Using crypto API for GUID generation
  public projectLines: ProjectLine[] = [];

  constructor(public name: string) {
    this.projectLines = [new ProjectLine(this.id)];
  }
}

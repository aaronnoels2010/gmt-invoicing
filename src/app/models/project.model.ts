import { ProjectLine } from '@models/project-line.model';

export class Project {
  public id: string = crypto.randomUUID(); // Using crypto API for GUID generation
  public projectLines: ProjectLine[] = [];

  constructor(public name: string) {
    this.projectLines = [new ProjectLine(this.id)];
  }

  static fromObject(json: any): Project {
    const project = new Project(json.name);
    project.id = json.id;
    project.projectLines = json.projectLines.map(
      (line: any) => ProjectLine.fromObject(line)
    );
    return project;
  }
}

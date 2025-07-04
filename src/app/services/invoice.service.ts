import { Injectable, signal } from '@angular/core';
import { Invoice } from '@models/invoice.model';
import { ProjectLine } from '@models/project-line.model';
import { Project } from '@models/project.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  public invoice: Invoice = new Invoice();
  public invoiceSignal = signal<Invoice>(this.invoice);

  constructor() {}

  exportToJsonFile() {
    const dataStr = JSON.stringify(this.invoice, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'invoice.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  importFromJsonFile(file: File) {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target?.result as string);
        this.invoice = Invoice.fromObject(jsonData);
        this.invoiceSignal.set(this.invoice);
      } catch (error) {
        console.error('Error parsing JSON file:', error);
      }
    };
    reader.readAsText(file);
  }

  // Project
  addProject() {
    this.invoice.projects.push(new Project(''));
  }

  deleteProject(id: string) {
    this.invoice.projects = this.invoice.projects.filter(
      (project) => project.id !== id
    );
  }

  getProjectIndexById(id: string): number {
    var projectIndex = this.invoice.projects.findIndex(
      (project) => project.id === id
    );
    if (projectIndex === -1) {
      console.error('Project not found for the given ID:', id);
    }
    return projectIndex;
  }

  // Project Line

  deleteProjectLine(projectLine: ProjectLine) {
    const projectIndex = this.getProjectIndexById(projectLine.projectId);
    if (projectIndex !== -1) {
      const project = this.invoice.projects[projectIndex];
      if (project.projectLines.length === 1) return;
      project.projectLines = project.projectLines.filter(
        (line) => line.id !== projectLine.id
      );
    }
  }

  duplicateProjectLine(projectLine: ProjectLine) {
    const newProjectLine = new ProjectLine(projectLine.projectId);
    newProjectLine.startTime = projectLine.startTime;
    newProjectLine.endTime = projectLine.endTime;
    newProjectLine.date = projectLine.date;
    newProjectLine.isHoliday = projectLine.isHoliday;
    this.invoice.projects[
      this.getProjectIndexById(projectLine.projectId)
    ].projectLines.push(newProjectLine);
  }

  moveProjectLineUp(projectLine: ProjectLine) {
    const project = this.invoice.projects.find(
      (p) => p.id === projectLine.projectId
    );
    if (project) {
      const index = project.projectLines.indexOf(projectLine);
      if (index > 0) {
        [project.projectLines[index - 1], project.projectLines[index]] = [
          project.projectLines[index],
          project.projectLines[index - 1],
        ];
      }
    } else {
      console.error('Project not found for the given project line.');
    }
  }

  moveProjectLineDown(projectLine: ProjectLine) {
    const project = this.invoice.projects.find(
      (p) => p.id === projectLine.projectId
    );
    if (project) {
      const index = project.projectLines.indexOf(projectLine);
      if (index < project.projectLines.length - 1) {
        [project.projectLines[index + 1], project.projectLines[index]] = [
          project.projectLines[index],
          project.projectLines[index + 1],
        ];
      }
    } else {
      console.error('Project not found for the given project line.');
    }
  }
}

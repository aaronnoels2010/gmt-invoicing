import { Component, input, Signal } from '@angular/core';
import { CoreModule } from '@modules/core/core-module';
import { ProjectLineComponent } from '@components/project-line/project-line';
import { InvoiceService } from '@services/invoice.service';
import { FormsModule } from '@angular/forms';
import { Project } from '@models/project.model';

@Component({
  host: {
    class: 'flex flex-grow',
  },
  selector: 'app-project',
  imports: [CoreModule, FormsModule, ProjectLineComponent],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectComponent {
  project = input<Project>(new Project(''));

}

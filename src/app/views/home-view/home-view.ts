import { Component } from '@angular/core';
import { Project } from '@components/project/project';

@Component({
  selector: 'app-home-view',
  imports: [Project],
  templateUrl: './home-view.html',
  styleUrl: './home-view.css',
})
export class HomeView {}

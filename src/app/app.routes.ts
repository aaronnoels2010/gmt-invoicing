import { HomeView } from '@env/home-view/home-view';
import { GetSegment, ROUTES } from './routes';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeView,
    title: 'GMT Invoicing',
  },
  {
    path: GetSegment(ROUTES.invoice.root),
    children: [
      {
        path: GetSegment(ROUTES.invoice.projects),
        loadComponent: () =>
          import('./views/invoice-projects-view/invoice-projects-view').then(
            (m) => m.InvoiceProjectsView
          ),
      },
      {
        path: GetSegment(ROUTES.invoice.details),
        loadComponent: () =>
          import('./views/invoice-detail-view/invoice-detail-view').then(
            (m) => m.InvoiceDetailView
          ),
      },
      {
        path: GetSegment(ROUTES.invoice.export),
        loadComponent: () =>
          import('./views/invoice-export-view/invoice-export-view').then(
            (m) => m.InvoiceExportView
          ),
      },
    ],
  },
];

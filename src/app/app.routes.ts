import { Routes } from '@angular/router';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { UsersViewComponent } from './views/users-view/users-view.component';
import { DocumentsViewComponent } from './views/documents-view/documents-view.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardViewComponent
  },
  {
    path: 'users',
    pathMatch: 'full',
    component: UsersViewComponent
  },
  {
    path: 'documents',
    pathMatch: 'full',
    component: DocumentsViewComponent
  },
  {
    path: '**',
    component: PageNotFoundViewComponent
  }
];

import { Routes } from '@angular/router';
import { Page } from './components/page/page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'resume' },
  { path: 'resume', component: Page },
  { path: '**', redirectTo: 'resume' }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page.component'),
  },
  {
    path: 'guideline',
    loadComponent: () => import('./pages/guideline/guideline.component').then(m => m.GuidelineComponent),
  }
];

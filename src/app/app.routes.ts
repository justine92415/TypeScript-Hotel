import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/layout/layout.component'),
    loadChildren: () => import('./pages/layout/layout.routes'),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register-page/register-page.component'),
  },
  {
    path: 'components',
    loadComponent: () =>
      import('./pages/components-demo/components-demo.component').then((m) => m.ComponentsDemoComponent),
  },
  {
    path: 'guideline',
    loadComponent: () => import('./pages/guideline/guideline.component').then((m) => m.GuidelineComponent),
  },
  {
    path:'**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout1',
    pathMatch: 'full',
  },
  {
    path: 'layout1',
    loadComponent: () => import('./pages/layout1/layout1.component'),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component'),
      },
    ],
  },
  {
    path: 'layout2',
    loadComponent: () => import('./pages/layout2/layout2.component'),
    children:[
      {
        path:'login',
        loadComponent: () => import('./pages/login-page/login-page.component'),
      },
      {
        path:'register',
        loadComponent: () => import('./pages/register-page/register-page.component'),
      }
    ]
  },
  {
    path: 'components',
    loadComponent: () => import('./pages/components-demo/components-demo.component').then((m) => m.ComponentsDemoComponent),
  },
  {
    path: 'guideline',
    loadComponent: () => import('./pages/guideline/guideline.component').then((m) => m.GuidelineComponent),
  },
];

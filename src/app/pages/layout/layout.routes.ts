import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'home',
    loadComponent: () => import('./home-page/home-page.component'),
  },
  {
    path:'rooms',
    loadComponent: () => import('./rooms-page/rooms-page.component'),
  },
  {
    path:'detail',
    loadComponent: () => import('./detail-page/detail-page.component'),
  },
  {
    path:'confirm',
    loadComponent: () => import('./confirm-page/confirm-page.component'),
  },
];

export default routes;
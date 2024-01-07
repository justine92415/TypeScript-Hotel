import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'guideline',
    loadComponent: () =>
      import('./pages/guideline/guideline.component').then(
        (m) => m.GuidelineComponent
      ),
  },
  {
    path: 'components-demo',
    loadComponent: () =>
      import('./pages/components-demo/components-demo.component').then(
        (m) => m.ComponentsDemoComponent
      ),
  },
];

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Work } from './pages/work/work';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'service',
    component: Service,
  },
  {
    path: 'work',
    component: Work,
  },
];

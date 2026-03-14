import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Career } from './career/career';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Work } from './pages/work/work';
import { Client } from './client/client';
import { Team } from './team/team';
import { Blogs } from './pages/blogs/blogs';
import { BlogDetail } from './pages/blog-detail/blog-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'career', component: Career },
  { path: 'about', component: About },
  { path: 'service', component: Service },
  { path: 'work', component: Work },
  { path: 'client', component: Client },
  { path: 'team', component: Team },
  {
    path: 'blogs',
    component: Blogs,
  },

  {
    path: 'blog/:id',
    component: BlogDetail,
  },
];

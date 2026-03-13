import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Career } from './career/career';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contact', component: Contact },
    { path: 'career', component: Career },
];

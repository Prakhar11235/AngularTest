import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ContactComponent } from './components/contact.component';
import { AboutUsComponent } from './components/about.component';
// import { ErrorComponent } from './components/error.component';

export const routes: Routes = [
    {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'contact',
    title: 'App Contact Page',
    component: ContactComponent,
  },
  {
    path: 'about',
    title: 'App About Page',
    component: AboutUsComponent,
  },
  // {
  //   path: 'error',
  //   component: ErrorComponent
  // },
  

];

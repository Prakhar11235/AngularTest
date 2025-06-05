import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-page/home.component';
import { ContactComponent } from './components/contact.component';
import { AboutUsComponent } from './components/about.component';
import { SignupComponent } from './components/signup-Form/signupForm.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
// import { ErrorComponent } from './components/error.component';

export const routes: Routes = [
  {
    path:'',
    title:'Landing Page',
    component:LandingPageComponent,
  },
  {
    path: 'signup',
    title: 'Signup Page',
    component: SignupComponent,
  },
  {
    path: 'home',
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
  }
];

  // {
  //   path: 'error',
  //   component: ErrorComponent
  // },
  



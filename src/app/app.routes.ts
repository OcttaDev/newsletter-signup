import { Routes } from '@angular/router';
import { AppSignupComponent } from './components/app-signup/app-signup.component';
import { AppSuccessComponent } from './components/app-success/app-success.component';

export const routes: Routes = [
  { path: '', component: AppSignupComponent },
  { path: 'success', component: AppSuccessComponent },
];

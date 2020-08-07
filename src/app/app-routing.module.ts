import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { FeaturesComponent } from "./components/features/features.component";
import { HomeComponent } from "./components/home/home.component";
import { DownloadComponent } from "./components/download/download.component";
import { ContactComponent } from "./components/contact/contact.component";
import { TeamComponent } from "./components/team/team.component";
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'features',
    component: FeaturesComponent
  },
  
  {
    path: 'download',
    component: DownloadComponent
  },
  
  {
    path: 'contact',
    component: ContactComponent
  },
  
  {
    path: 'team',
    component: TeamComponent
  },
  
  {
    path: 'signin',
    component: SigninComponent
  },
  
  {
    path: 'signup',
    component: SignupComponent
  },
  
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

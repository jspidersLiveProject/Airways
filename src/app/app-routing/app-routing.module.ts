import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PrepareComponent } from '../prepare/prepare.component';
import { TravelComponent } from '../travel/travel.component';
import { DiscoverComponent } from '../discover/discover.component';
import { LoginComponent } from '../login/login.component';

const approutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Prepare', component: PrepareComponent },
  { path: 'Travel', component: TravelComponent },
  { path: 'Discover', component: DiscoverComponent },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule {


}

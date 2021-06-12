import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HomeModule } from './Components/home/home.module';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FacebookGuardGuard } from './Guards/facebook-guard.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./Components/home/home.module').then(m => m.HomeModule),
    canActivate:[FacebookGuardGuard]

  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'reg',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

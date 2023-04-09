import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// <<<<<<< HEAD
import { SuccessPageComponent } from './success-page/success-page.component';
import { SavingsPageComponent } from './savings-page/savings-page.component';
import { SavingsTrackerComponent } from './savings-tracker/savings-tracker.component';
import { } from './create-savings-goal/create-savings-goal.component'

import { CreateTargetComponent } from './create-target/create-target.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'savings', component:SavingsPageComponent},
  {path: 'success', component:SuccessPageComponent},
  {path: 'savingsTracker', component:SavingsTrackerComponent},
  {path: 'create-goal', component:CreateTargetComponent},
  {path: 'create-target', component:CreateTargetComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

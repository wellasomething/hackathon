import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SavingsPageComponent } from './savings-page/savings-page.component';
import { CreateGoalPageComponent } from './create-goal-page/create-goal-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { SavingsTrackerComponent } from './savings-tracker/savings-tracker.component';
import { CreateTargetComponent } from './create-target/create-target.component';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatInputModule} from '@angular/material/input';
//import {MatButtonModule} from '@angular/material/button';
//import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http'
  // MatFormFieldModule, 
    // MatInputModule,
    // MatButtonModule,
    // MatToolbarModule,

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SavingsPageComponent,
    CreateGoalPageComponent,
    SuccessPageComponent,
    SavingsTrackerComponent,
    CreateTargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

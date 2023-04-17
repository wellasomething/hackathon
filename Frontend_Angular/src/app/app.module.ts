import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SavingsPageComponent } from './savings-page/savings-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { SavingsTrackerComponent } from './savings-tracker/savings-tracker.component';
import { CreateTargetComponent } from './create-target/create-target.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { CreateSavingsGoalComponent } from './create-savings-goal/create-savings-goal.component';
import { ManageSavingsComponent } from './manage-savings/manage-savings.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DarkToggleComponent } from './dark-toggle/dark-toggle.component'; ;
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SavingsPageComponent,

    SuccessPageComponent,
    SavingsTrackerComponent,
    CreateTargetComponent,
    CreateSavingsGoalComponent,
    ManageSavingsComponent,
    DarkToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

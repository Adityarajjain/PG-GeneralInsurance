import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { MotorInsuranceComponent } from './motor-insurance/motor-insurance.component';
import { TravelInsuranceComponent } from './travel-insurance/travel-insurance.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterService } from './service/register.service';
import { RegisterComponent } from './register/register.component';


const routes:Routes=[
  {path:"", pathMatch:"full", redirectTo:"/home"},
  {path:"register",component:RegisterComponent},
  {path:"buy-insurance", component:BuyInsuranceComponent},
  {path:"motor-insurance", component:MotorInsuranceComponent},
  {path:"travel-insurance", component:TravelInsuranceComponent},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BuyInsuranceComponent,
    MotorInsuranceComponent,
    TravelInsuranceComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

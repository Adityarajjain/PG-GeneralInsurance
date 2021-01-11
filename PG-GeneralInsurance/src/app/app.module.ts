
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
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { LoginComponent } from './login/login.component';
import { RegisterService } from './service/register.service';
import { RegisterComponent } from './register/register.component';
import { VehiclelistService } from './service/vehiclelist.service';
import { MotorInsuranceDetailsService } from './service/motorInsuranceDetails.service';
import { PolicyPreviewComponent } from './policy-preview/policy-preview.component';
import { PaymentComponent } from './payment/payment.component';
import { EstimateInsuranceComponent } from './estimate-insurance/estimate-insurance.component';
import { TravelInsuranceDetailsService } from './service/travelInsuranceDetails.service';
import { UserService } from './service/user.service';
import { TravelPaymentComponent } from './travel-payment/travel-payment.component';
import { TransactionService } from './service/transaction.service';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { RenewalDisplayService } from './service/renewaldisp.service';
import { SelectyearComponent } from './selectyear/selectyear.component';
import { DashboardService } from './service/dashboard.service';
import { BrowserModule } from '@angular/platform-browser';
import { DummyComponent } from './dummy/dummy.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { AuthguardGuard } from './authguard.guard';
import { TravelPolicyComponent } from './travel-policy/travel-policy.component';
import { ClaiminsuranceComponent } from './claiminsurance/claiminsurance.component';
import { MotorInsuranceAdminComponent } from './motor-insurance-admin/motor-insurance-admin.component';
import { MotorClaimAdminComponent } from './motor-claim-admin/motor-claim-admin.component';
import { TravelinsuranceclaimComponent } from './travelinsuranceclaim/travelinsuranceclaim.component';
import { TravelinsuranceAdminComponent } from './travelinsurance-admin/travelinsurance-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApproveMotorClaimService } from './service/approveMotorClaim.service';
import { ClaimService } from './service/claim.service';
import { MotorclaimService } from './service/motorclaim.service';
import { TravelService } from './service/travel.service';
import { TravelclaimService } from './service/travelclaim.service';
import { MotorInsuranceAdminService } from './service/MotorInsuranceAdmin.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';



const routes:Routes=[
  {path:"", pathMatch:"full", redirectTo:"/home"},
  {path:"register",component:RegisterComponent},
  {path:"buy-insurance", component:BuyInsuranceComponent, canActivate:[AuthguardGuard]},
  {path:"motor-insurance", component:MotorInsuranceComponent, canActivate:[AuthguardGuard]},
  {path:"travel-insurance", component:TravelInsuranceComponent, canActivate:[AuthguardGuard]},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"policy-preview", component:PolicyPreviewComponent, canActivate:[AuthguardGuard]},
  {path:"estimate-insurance", component:EstimateInsuranceComponent},
  {path:"Renew-insurance", component:DisplaydetailsComponent, canActivate:[AuthguardGuard]},
  {path:'yearrenewal/:reg_number/:modelname/:manufacturer/:year',component:SelectyearComponent},
  {path:"user-dashboard",component:UserDashboardComponent, canActivate:[AuthguardGuard]},
  {path:'dummy', component:DummyComponent},
  {path:"claim-insurance", component:ClaiminsuranceComponent},
  {path:"admin", component:AdminLoginComponent},
  {path:"travelinsuranceclaim", component:TravelinsuranceclaimComponent},
  {path:"travelinsuranceadmin", component:TravelinsuranceAdminComponent},
  {path:"motorinsuranceadmin", component:MotorInsuranceAdminComponent},
  {path:"motorinsuranceclaim", component:MotorClaimAdminComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthguardGuard]}
  
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
    RegisterComponent,
    PolicyPreviewComponent,
    PaymentComponent,
    EstimateInsuranceComponent,
    TravelPaymentComponent,
    DisplaydetailsComponent,
    SelectyearComponent,
    DummyComponent,
    UserDashboardComponent,
    TravelPolicyComponent,
    ClaiminsuranceComponent,
    MotorInsuranceAdminComponent,
    MotorClaimAdminComponent,
    TravelinsuranceclaimComponent,
    TravelinsuranceAdminComponent,
    DashboardComponent,
    AdminLoginComponent
   
  ],
  entryComponents:[PolicyPreviewComponent,TravelPolicyComponent],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [LoginService,
    RegisterService,
    VehiclelistService,
    MotorInsuranceDetailsService,
    TravelInsuranceDetailsService,
    UserService,
    TransactionService, 
    RenewalDisplayService, 
    DashboardService,
    ApproveMotorClaimService,
    ClaimService,
    MotorclaimService,
    TravelService,
    TravelclaimService,
    MotorInsuranceAdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

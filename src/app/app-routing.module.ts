import { CompanyGuardService } from './services/company-guard.service';
import { CustomerGuardService } from './services/customer-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { LoginComponent } from './components/login/login.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuardService] },
  { path: 'customer', component: CustomerComponent, canActivate: [CustomerGuardService]},
  { path: 'company', component: CompanyComponent, canActivate: [CompanyGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

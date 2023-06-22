import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './modules/Employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './modules/Employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './modules/Employee/update-employee/update-employee.component';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';
import { AddOrganizationComponent } from './modules/Organization/add-organization/add-organization.component';
import { AddDepartmentComponent } from './modules/Department/add-department/add-department.component';
import { ListDepartmentComponent } from './modules/Department/list-department/list-department.component';
import { UpdateDepartmentComponent } from './modules/Department/update-department/update-department.component';
import { UpdateOrganizationComponent } from './modules/Organization/update-organization/update-organization.component';
import { ListOrganizationComponent } from './modules/Organization/list-organization/list-organization.component';
import { OrgProfileComponent } from './modules/Organization/org-profile/org-profile.component';
import { DepProfileComponent } from './modules/Department/dep-profile/dep-profile.component';
import { EmpProfileComponent } from './modules/Employee/emp-profile/emp-profile.component';
import { LoginComponent } from './modules/login/login.component';
import { ErrorComponent } from './modules/error/error.component';
import { EmployeeLoginComponent } from './modules/login/employee-login/employee-login.component';

const routes: Routes = [
  {path: 'employees',component:ListEmployeeComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'updateEmployee/:id',component:UpdateEmployeeComponent},
  {path:'departments',component:ListDepartmentComponent},
  {path:'addDepartment',component:AddDepartmentComponent},
  {path:'updateDepartment/:id',component:UpdateDepartmentComponent},
  {path:'organizations',component:ListOrganizationComponent},
  {path:'updateOrganization/:id',component:UpdateOrganizationComponent},
  {path:'addOrganization',component:AddOrganizationComponent},
  {path:'orgProfile',component:OrgProfileComponent},
  {path:'depProfile',component:DepProfileComponent},
  {path:'empProfile',component:EmpProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'error',component:ErrorComponent},
  {path:'employeeLogin',component:EmployeeLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './modules/Employee/add-employee/employee';
import { Department } from './modules/Department/add-department/department';
import { Organization } from './modules/Organization/add-organization/organization';
import { Login } from './modules/login/login';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  employee:any
  department:any
  organization:any

  private baseURL="http://localhost:8999";
  constructor(private httpClient:HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL +'/employee/allEmployee'}`);
  }

  addEmployee(employee: any){
    return this.httpClient.post(`${this.baseURL+"/employee/addEmployee"}`, employee);
  }

  getEmployeeById(id:String): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/employee/employeeId/${id}`);
  }

  updateEmployee(id:String,employee:Employee){
    return this.httpClient.put(`${this.baseURL}/employee/update/${id}`,employee);
  }
  deleteEmployee(id:String){
    return this.httpClient.delete(`${this.baseURL}/employee/delete/${id}`);
  }

  // Department Service

  getDepartmentList(): Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.baseURL +'/department/allDepartment'}`);
  }

  addDepartment(department: Department){
    return this.httpClient.post(`${this.baseURL+'/department/addDepartment'}`,department);
  }

  getDepartmentById(id:Number): Observable<Department>{
    return this.httpClient.get<Department>(`${this.baseURL}/department/departmentId/${id}`);
  }
  updateDepartment(id:Number,department:Department){
    return this.httpClient.put(`${this.baseURL}/department/update/${id}`,department);
  }
  deleteDepartment(id:Number){
    return this.httpClient.delete(`${this.baseURL}/department/delete/${id}`);
  }

  //Organization Service

  getOrganizationList(): Observable<Organization[]>{
    return this.httpClient.get<Organization[]>(`${this.baseURL}/organization/allOrganization`);
  }
  addOrganization(organization:Organization){
    return this.httpClient.post(`${this.baseURL}/organization/addOrganization`,organization)
  }

  getOrganizationById(id:Number): Observable<Organization>{
    return this.httpClient.get<Organization>(`${this.baseURL}/organization/organizationId/${id}`);
  }

  updateOrganization(id:Number,organization:Organization){
    return this.httpClient.put(`${this.baseURL}/organization/update/${id}`,organization);
  }

  deleteOrganization(id:Number){
    return this.httpClient.delete(`${this.baseURL}/organization/delete/${id}`);
  }

  // Integrated EndPonts

  getOrgByEmp(id:String): Observable<Organization>{
    return this.httpClient.get<Organization>(`${this.baseURL}/employee/getOrganizationDetails/${id}`)
  }

  getDepByEmp(id:String): Observable<Department>{
    return this.httpClient.get<Department>(`${this.baseURL}/employee/getDepartmentDetails/${id}`)
  }

  // Login
  login(login:Login){
    return this.httpClient.post(`${this.baseURL}/login/signin`,login);
  }
  saveCred(login:Login){
    return this.httpClient.post(`${this.baseURL}/login/saveCred`,login);
  }
}

import { Component } from '@angular/core';
import { Employee } from '../add-employee/employee';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { Router } from '@angular/router';
import { Organization } from '../../Organization/add-organization/organization';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {

  employees: Employee[];
  constructor(private employeeService:EmployeeManagementService, private router:Router){}
  name:any
  id : Number;
  totalRecords:any;
  page:any=1;
  ngOnInit(): void{
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      console.log(data);
      this.employees=data;
      this.totalRecords=this.employees.length;
      
    })
  }

  updateEmployee(id:String){
    this.router.navigate(['/updateEmployee',id]);
  }

  deleteEmployee(id:String){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
    });
    this.router.navigate(['/adminDashboard'])
  }
  getOrg(empId:String){
    this.employeeService.getOrgByEmp(empId).subscribe(data=>{
      console.log(data);
      this.employeeService.organization=data;
      this.router.navigate(['/orgProfile'])
    },
    (error) => this.router.navigate(['/error'])
    )
    
  }
  getDep(empId:String){
    this.employeeService.getDepByEmp(empId).subscribe(data=>{
      console.log(data)
      this.employeeService.department=data
      this.router.navigate(['/depProfile'])
    },
    (error) => this.router.navigate(['/error'])
    )
  }
  Search(){
    if(this.name==""){
      this.ngOnInit();
    }
    else{
      this.employees=this.employees.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  key: String ='id';
  reverse:boolean=false;
  sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
}

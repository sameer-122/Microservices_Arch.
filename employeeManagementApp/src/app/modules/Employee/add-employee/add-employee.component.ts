import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { Router } from '@angular/router';
import { Login } from '../../login/login';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employee :Employee = new Employee();
constructor(private employeeService : EmployeeManagementService, 
  private router : Router){}
  login:Login=new Login();
  ngOnInit(): void {}
  
  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit(){
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.login.username=this.employee.id;
      this.login.password=this.employee.name.substring(0,2)+"@1234";
      this.employeeService.saveCred(this.login).subscribe(response=>{
        console.log(response);
      })
      this.goToEmployeeList();
      alert("Employee has been added")
    }),
    (error)=>alert('Employee was not added')
    
  }
}

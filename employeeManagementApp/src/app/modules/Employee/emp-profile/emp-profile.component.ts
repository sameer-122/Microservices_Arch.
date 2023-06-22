import { Component } from '@angular/core';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { Organization } from '../../Organization/add-organization/organization';
import { Employee } from '../add-employee/employee';
import { Route } from '@angular/router';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent {

  employee:Employee;
  constructor(private employeeService:EmployeeManagementService ){}
  ngOnInit(): void{
    this.employee=this.employeeService.employee;
  }

}

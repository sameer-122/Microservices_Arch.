import { Component } from '@angular/core';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { Department } from '../add-department/department';

@Component({
  selector: 'app-dep-profile',
  templateUrl: './dep-profile.component.html',
  styleUrls: ['./dep-profile.component.css']
})
export class DepProfileComponent {

  department:Department;
  constructor(private employeeService:EmployeeManagementService){}

  ngOnInit(): void{
    this.department=this.employeeService.department
  }
}

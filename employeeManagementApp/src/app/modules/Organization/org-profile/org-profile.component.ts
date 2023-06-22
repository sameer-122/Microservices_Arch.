import { Component } from '@angular/core';
import { Organization } from '../add-organization/organization';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { ListEmployeeComponent } from '../../Employee/list-employee/list-employee.component';

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
  styleUrls: ['./org-profile.component.css']
})
export class OrgProfileComponent {
  organization:Organization
  constructor(private employeeService:EmployeeManagementService){}

  ngOnInit(): void{
    this.organization=this.employeeService.organization;
  }
}

import { Component } from '@angular/core';
import { Organization } from '../add-organization/organization';
import { Router } from '@angular/router';
import { EmployeeManagementService } from 'src/app/employee-management.service';

@Component({
  selector: 'app-list-organization',
  templateUrl: './list-organization.component.html',
  styleUrls: ['./list-organization.component.css']
})
export class ListOrganizationComponent {
  organizations: Organization[];
  constructor(private organizationService:EmployeeManagementService, private router:Router){}

  
  ngOnInit(): void{
    this.getOrganizations();
  }

  getOrganizations(){
    this.organizationService.getOrganizationList().subscribe(data=>{
      console.log(data);
      this.organizations=data;
    })
  }

  updateOrganization(id:Number){
    this.router.navigate(['/updateOrganization',id]);
  }

  deleteEmployee(id:Number){
    this.organizationService.deleteOrganization(id).subscribe(data=>{
      console.log(data);
    })
    this.router.navigate(['/adminDashboard'])
  }
}

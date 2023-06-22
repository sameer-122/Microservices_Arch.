import { Component } from '@angular/core';
import { Organization } from './organization';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent {
  organization : Organization = new Organization();
  constructor(private organizationService : EmployeeManagementService, 
    private router : Router){}

  onSubmit(){
    this.organizationService.addOrganization(this.organization).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/organizations'])
      alert("Organization has been added")
    })
  }
}

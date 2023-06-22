import { Component } from '@angular/core';
import { Organization } from '../add-organization/organization';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-organization',
  templateUrl: './update-organization.component.html',
  styleUrls: ['./update-organization.component.css']
})
export class UpdateOrganizationComponent {
  organization: Organization=new Organization();
  constructor(private organizationService:EmployeeManagementService,private router:Router,private route:ActivatedRoute){};
  id:Number;
  ngOnInit(): void {
    console.log(this.organization);
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.organizationService.getOrganizationById(this.id).subscribe((data)=>{
      this.organization=data;
      console.log(this.organization);
    })
  }
  onSubmit(){
    console.log(this.organization);
    this.organizationService.updateOrganization(this.id,this.organization).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['organizations']);
      alert("Organization has been updated");
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private router:Router){}
  ngOnInit(): void{}

  manageEmployee(){
    this.router.navigate(['employees']);
  }
  manageDepartment(){
    this.router.navigate(['departments']);
  }
  manageOrganization(){
    this.router.navigate(['organizations']);
  }
}

import { Component } from '@angular/core';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { Router } from '@angular/router';
import { Department } from '../add-department/department';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent {
  departments: Department[];
  constructor(private departmentService:EmployeeManagementService, private router:Router){}

  id : Number;
  
  ngOnInit(): void{
    this.getDepartments();
  }

  getDepartments(){
    this.departmentService.getDepartmentList().subscribe(data=>{
      console.log(data);
      this.departments=data;
    })
  }

  updateDepartment(id:Number){
    this.router.navigate(['/updateDepartment',id]);
  }
  
  deleteDepartment(id:Number){
    this.departmentService.deleteDepartment(id).subscribe(data=>{
      console.log(data);
    });
    this.router.navigate(['/adminDashboard'])
  }

}

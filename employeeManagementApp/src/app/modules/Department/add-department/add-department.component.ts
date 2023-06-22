import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Department} from './department';
import { EmployeeManagementService } from 'src/app/employee-management.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  department: Department = new Department();
constructor(private departmentService : EmployeeManagementService, 
  private router : Router){}

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.department);
    this.departmentService.addDepartment(this.department).subscribe(data=>{
      console.log(data);
      this.router.navigate(['departments']);
      alert("department has been added")
    }),
    (error)=>alert('Department was not added')
    
  }
}

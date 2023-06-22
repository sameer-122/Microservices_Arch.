import { Component } from '@angular/core';
import { Department } from '../add-department/department';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent {
  department: Department=new Department();
  constructor(private departmentService:EmployeeManagementService,private router:Router,private route:ActivatedRoute){};
  id:Number;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.departmentService.getDepartmentById(this.id).subscribe((data)=>{
      this.department=data;
      console.log(this.department);
    })
  }
  onSubmit(){
    console.log(this.department);
    this.departmentService.updateDepartment(this.id,this.department).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/departments']);
      alert("Department has been updated");
    });
  }
}

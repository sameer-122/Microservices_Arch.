import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../add-employee/employee';
import { EmployeeManagementService } from '../../../employee-management.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent{
  
  emp: Employee=new Employee();
  constructor(private employeeService:EmployeeManagementService,private router:Router,private route:ActivatedRoute){};
  id:String;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((data)=>{
      this.emp=data;
      console.log(this.emp);
    })
  }
  onSubmit(){
    console.log(this.emp);
    this.employeeService.updateEmployee(this.id,this.emp).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/employees']);
      alert("Employee has been updated");
    });
  }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { Login } from '../login';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  
  login: Login = new Login();

  constructor(private loginService: EmployeeManagementService , private route: Router) {}

  User(){
    console.log(this.login)
    this.loginService.login(this.login).subscribe(data=>{
      alert('Login Succesfull');
      if(this.login.username.substring(0,4)=="ADMN"){
        this.route.navigate(['/adminDashboard'])
      }
      else {
        this.loginService.getEmployeeById(this.login.username).subscribe((response)=>{
          this.loginService.employee=response
          console.log(response)
          this.route.navigate(['/empProfile'])
        })
      }
    },
    (error) => alert("Please Enter Correct Credentials")
    )
    
  }
}

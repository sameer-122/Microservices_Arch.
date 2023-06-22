import { Component } from '@angular/core';
import { Login } from './login';
import { EmployeeManagementService } from 'src/app/employee-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


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

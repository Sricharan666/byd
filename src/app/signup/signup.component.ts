import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './User';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
   Formvalue ! :FormGroup;
   userModelObj : UserModel = new UserModel();

  constructor(private formb : FormBuilder, public rtr : Router , private api : ApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.Formvalue = this.formb.group(
      {
        firstname : [''],
        lastname : [''],
        mobileno : [''],
        email : [''],
        password : [''],
      }
    )
  }
  submit1(){
    this.rtr.navigate(["login"]);
  }  

  postEmployeeDetails() {
    this.userModelObj.firstname = this.Formvalue.value.firstname;
    this.userModelObj.lastname = this.Formvalue.value.lastname;
    this.userModelObj.mobileno = this.Formvalue.value.mobileno;
    this.userModelObj.email = this.Formvalue.value.email;
    this.userModelObj.password = this.Formvalue.value.password;
    console.log(this.userModelObj.firstname+""+this.userModelObj.lastname );

if(this.userModelObj.firstname != '' && this.userModelObj.lastname !='' && this.userModelObj.email != '' && this.userModelObj.mobileno != '', this.userModelObj.password != ''){
    this.api.postEmployee(this.userModelObj).subscribe(data1 => {
      
      alert('successfully created');
      this.rtr.navigate(['login']);
      
      this.Formvalue.reset();
   
      this.authService.login(this.userModelObj.id);
     
      // this.rtr.navigate(['user']);
    },
    (error) => {
      console.error('Error in postEmployee:', error);
    });
  }else{
    alert('Please fill the deatils');
  }
  console.log(this.userModelObj.id);
}

}

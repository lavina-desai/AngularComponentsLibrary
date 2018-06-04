import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    
form;

username = new FormControl('', [Validators.required]);
email = new FormControl('', [Validators.required, Validators.email]);
phoneNumber  = new FormControl('', [Validators.required,Validators.minLength(10)]);
password = new FormControl('', [Validators.required]);

//username
getErrorMessageUser() {
  return this.username.hasError('required') ? 'You must enter a UserName' :
      this.username.hasError('username') ? 'Not a valid username' :
          '';
}
//email
getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a valid Email' :
      this.email.hasError('email') ? 'Not a valid email' :
          '';
}

//phnnumber
getErrorMessagePhn()
{
  return this.phoneNumber.hasError('required') ? 'You must enter a phone number' :
      this.phoneNumber.hasError('phoneNumber') ? 'Not a valid Mobile Number' :
          '';
}

getErrorMessagePwd()
{
  return this.password.hasError('required') ? 'You must enter a password' :
      this.password.hasError('password') ? 'Not a valid password' :
          '';
}
  constructor() { }

  ngOnInit() {
  }

}

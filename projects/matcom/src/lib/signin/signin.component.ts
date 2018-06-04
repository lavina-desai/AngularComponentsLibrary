import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'lib-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
 
 onSubmit(){
   console.log('SUCCESS!!!'); 
 }

  form;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  //email
getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a valid Email' :
      this.email.hasError('email') ? 'Not a valid email' :
          '';
}

getErrorMessagePwd()
{
  return this.password.hasError('required') ? 'You must enter a password' :
      this.password.hasError('password') ? 'Not a valid password' :
          '';
}

  constructor() { }
}

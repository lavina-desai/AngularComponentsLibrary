import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

username = new FormControl('', [Validators.required]);
password = new FormControl('', [Validators.required]);
confirmpassword = new FormControl('', [Validators.required]);

getErrorMessageUser() {
  return this.username.hasError('required') ? 'You must enter a UserName' :
      this.username.hasError('username') ? 'Not a valid username' :
      ''
}

getErrorMessagepassword() {
  return this.password.hasError('required') ? 'You must enter a Password' :
      this.password.hasError('password') ? 'Not a valid Password' :
      ''
}

getErrorMessageconfirmpassword() {
  return this.confirmpassword.hasError('required') ? 'You must enter a Confirm Password' :
      this.confirmpassword.hasError('confirmpassword') ? 'Not a valid Confirm Password' :
      ''
}

onSubmit(){
   console.log("Password Reset Successfull ..!!")
}
  constructor() { }

  ngOnInit() {
  }

}

import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'lib-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
 
 public errorMsg = '';
  @Output() onSubmit = new EventEmitter()

  constructor() { }

  // // signInForm = new FormGroup({
  // //   email:new FormControl('', [Validators.required,Validators.email]),
  // //   password:new FormControl('',Validators.required)
  // // });

  // login(){
  //   if (!this._validateForm()) return

  //   this.onSubmit.emit(this.signInForm.value)
  // }

  

  // private _validateForm() {
  //   return this.signInForm.valid
  // }


}

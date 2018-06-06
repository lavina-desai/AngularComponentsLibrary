import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'lib-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
 
  email:string;
  pass:string;
  @Output() onSubmit = new EventEmitter()

  signInForm = new FormGroup({
  email : new FormControl('', [Validators.required, Validators.email]),
  pass : new FormControl('',Validators.required)
  });

  constructor() { }

  login(){
    if (!this._validateForm()) return
   this.onSubmit.emit(this.signInForm.value)
 }

private _validateForm() {
    return this.signInForm.valid
   }

}

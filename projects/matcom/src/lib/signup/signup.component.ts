import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
public errorMsg = '';
  @Output() onSubmit = new EventEmitter()

  name: string;

  registerForm = new FormGroup({
   username:new FormControl('',Validators.required),
   email:new FormControl('', [Validators.required,Validators.email]),
   pass:new FormControl('',Validators.required)
   
  });


  constructor() { }
  
 

  register(){
       if (!this._validateForm()) return
  
      this.onSubmit.emit(this.registerForm.value)
   }
  
    
  
   private _validateForm() {
       return this.registerForm.valid
     }
  
  ngOnInit() {
  }

}

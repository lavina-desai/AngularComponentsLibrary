import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a valid Email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit(){
    console.log("Request Sent.")
 }

  constructor() { }

  ngOnInit() {
  }

}

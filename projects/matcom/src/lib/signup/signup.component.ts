import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'lib-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public errorMsg = '';
  isSubmitted = false;
  name: string;
  email: string;
  password: string;

  registerForm = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('', [Validators.required,Validators.email]),
    pass:new FormControl('',Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

}

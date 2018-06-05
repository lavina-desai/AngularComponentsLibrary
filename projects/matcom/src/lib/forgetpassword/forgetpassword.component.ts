import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

   @Output() onSubmit = new EventEmitter()
  email : string;

forgetpasswordForm =  new FormGroup({
  Email : new FormControl('', [Validators.required, Validators.email])
});

constructor() { }

forgetpassword(){
  if (!this._validateForm()) return
  this.onSubmit.emit(this.forgetpasswordForm.value)
}

private _validateForm() {
return this.forgetpasswordForm.valid
}

  ngOnInit() {
  }

}

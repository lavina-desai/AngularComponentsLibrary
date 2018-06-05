import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  @Output() onSubmit = new EventEmitter()
  username : string;
  password : string;
  confirmpassword : string;

resetForm = new FormGroup({
user : new FormControl('', [Validators.required]),
pass : new FormControl('', [Validators.required]),
confirmpass : new FormControl('', [Validators.required])
});

  constructor() { }

  resetpassword(){
    if (!this._validateForm()) return
    this.onSubmit.emit(this.resetForm.value)
  }
  
  private _validateForm() {
  return this.resetForm.valid
  }

  ngOnInit() {
  }

}

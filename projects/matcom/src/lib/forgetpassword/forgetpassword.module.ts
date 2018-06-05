import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetpasswordComponent} from './forgetpassword.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';


@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [ForgetpasswordComponent],
  exports : [ForgetpasswordComponent]
})
export class ForgetpasswordModule { }

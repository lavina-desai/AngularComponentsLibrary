import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [SignupComponent],
  exports:[SignupComponent]
})
export class SignupModule { }


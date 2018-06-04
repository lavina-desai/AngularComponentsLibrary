import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { SharedMaterialModule } from './../shared-material/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [SigninComponent],
  exports:[SigninComponent]
})
export class SigninModule { }

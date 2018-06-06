import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './../shared-material/shared-material.module';
import {SnackbarExampleComponent} from './snackbar-example.component';
@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [SnackbarExampleComponent],
  exports: [SnackbarExampleComponent]
})
export class SnackbarExampleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { LoaderService } from '../loader/loader.service';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [LoaderComponent ],
  exports : [LoaderComponent ],
  providers:[LoaderService]
})
export class LoaderModule { }

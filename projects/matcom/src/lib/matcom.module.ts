import { NgModule } from '@angular/core';
import { MatcomComponent } from './matcom.component';
import { SignupModule } from './signup/signup.module';



@NgModule({
  imports: [
    SignupModule,
  ],
  declarations: [MatcomComponent],
  exports: [MatcomComponent, SignupModule]
})
export class MatcomModule { }

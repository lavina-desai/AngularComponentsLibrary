import { NgModule } from '@angular/core';
import { MatcomComponent } from './matcom.component';
import { SignupModule } from './signup/signup.module';
import { SigninModule } from './signin/signin.module';


@NgModule({
  imports: [
    SignupModule,
    SigninModule
  ],
  declarations: [MatcomComponent],
  exports: [MatcomComponent, SignupModule,SigninModule]
})
export class MatcomModule { }

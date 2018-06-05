import { NgModule } from '@angular/core';
import { MatcomComponent } from './matcom.component';
import { SignupModule } from './signup/signup.module';
import { ResetpasswordModule } from './resetpassword/resetpassword.module';
import { ForgetpasswordModule } from './forgetpassword/forgetpassword.module';

import { SigninModule } from './signin/signin.module';


@NgModule({
  imports: [
    SignupModule,
    SigninModule,
    ResetpasswordModule,
    ForgetpasswordModule
  ],
  declarations: [MatcomComponent],

  exports: [MatcomComponent, SignupModule,ResetpasswordModule, ForgetpasswordModule, SigninModule]
})
export class MatcomModule { }

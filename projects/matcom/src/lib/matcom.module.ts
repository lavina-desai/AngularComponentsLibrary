import { NgModule } from '@angular/core';
import { MatcomComponent } from './matcom.component';
import { SignupModule } from './signup/signup.module';
import { ResetpasswordModule } from './resetpassword/resetpassword.module';
import { ForgetpasswordModule } from './forgetpassword/forgetpassword.module';



@NgModule({
  imports: [
    SignupModule,
  ],
  declarations: [MatcomComponent],
  exports: [MatcomComponent, SignupModule,ResetpasswordModule, ForgetpasswordModule]
})
export class MatcomModule { }

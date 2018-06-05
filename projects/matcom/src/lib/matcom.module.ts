import { NgModule } from '@angular/core';
import { MatcomComponent } from './matcom.component';
import { SignupModule } from './signup/signup.module';
import { ResetpasswordModule } from './resetpassword/resetpassword.module';
import { ForgetpasswordModule } from './forgetpassword/forgetpassword.module';

import { SigninModule } from './signin/signin.module';


@NgModule({
  imports: [
    SignupModule,
    SigninModule
  ],
  declarations: [MatcomComponent],
<<<<<<< HEAD
  exports: [MatcomComponent, SignupModule,ResetpasswordModule, ForgetpasswordModule]
=======
  exports: [MatcomComponent, SignupModule,SigninModule]
>>>>>>> ee98cd11682c4057015dedf5c1360d006a2966ea
})
export class MatcomModule { }

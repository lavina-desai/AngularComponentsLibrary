import { NgModule } from '@angular/core';
import { MatcomComponent } from './matcom.component';
import { SignupModule } from './signup/signup.module';
import { ResetpasswordModule } from './resetpassword/resetpassword.module';
import { ForgetpasswordModule } from './forgetpassword/forgetpassword.module';
import { LoaderModule} from './loader/loader.module';
import { SigninModule } from './signin/signin.module';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  imports: [
    SignupModule,
    SigninModule,
    ResetpasswordModule,
    ForgetpasswordModule,
    LoaderModule
  ],
  declarations: [MatcomComponent],


  exports: [MatcomComponent, SignupModule,ResetpasswordModule, ForgetpasswordModule, SigninModule,LoaderModule]

  
})

export class MatcomModule { }

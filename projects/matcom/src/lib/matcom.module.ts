import { NgModule } from '@angular/core';
import { MatcomComponent } from './matcom.component';
import { SignupModule } from './signup/signup.module';
import { ResetpasswordModule } from './resetpassword/resetpassword.module';
import { ForgetpasswordModule } from './forgetpassword/forgetpassword.module';
import { SnackbarExampleModule } from './snackbar-example/snackbar-example.module';
import { LoaderModule } from './loader/loader.module';
import { SigninModule } from './signin/signin.module';


@NgModule({
  imports: [
    SignupModule,
    SigninModule,
    ResetpasswordModule,
    ForgetpasswordModule,
    SnackbarExampleModule,
    LoaderModule
  ],

  declarations: [MatcomComponent],
  exports: [
    MatcomComponent, 
    SignupModule, 
    ResetpasswordModule, 
    ForgetpasswordModule, 
    SigninModule, 
    SnackbarExampleModule, 
    LoaderModule
  ]

})

export class MatcomModule { }

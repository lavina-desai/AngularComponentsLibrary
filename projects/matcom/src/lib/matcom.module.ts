import { NgModule } from '@angular/core';
import { MatcomComponent } from './matcom.component';
import { SignupModule } from './signup/signup.module';
import { SnackbarExampleComponent } from './snackbar-example/snackbar-example.component';



@NgModule({
  imports: [
    SignupModule,
  ],
  declarations: [MatcomComponent, SnackbarExampleComponent],
  exports: [MatcomComponent, SignupModule]
})
export class MatcomModule { }

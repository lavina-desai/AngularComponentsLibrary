import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  forgetpassword(eve){
    console.log(eve);
    console.log("Link sent to reset your password.. ");
  }

  resetpassword(eve){
    console.log(eve);
    console.log("Password Changed..!!");
  }


}

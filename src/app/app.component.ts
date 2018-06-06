import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  register(eve){
    console.log(eve); 
    console.log("Successfully Registered");   
  }

  login(eve){
    console.log(eve);
    console.log("Successfully");  
  }

  resetpassword(event){
    console.log(event);
    console.log("Password Chnabged ..!!"); 
  }

  forgetpassword(event){
    console.log(event);
    console.log("Message sent to Email"); 
  }
}

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
    console.log("Successfully logged in"); 
  }
}

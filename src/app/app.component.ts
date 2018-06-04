import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login(eve){
    console.log(eve);
    
    console.log("Successfully logged in");
    
  }
}

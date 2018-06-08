import { Component } from '@angular/core';
import { LoaderService } from '../../projects/matcom/src/lib/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _loader : LoaderService) {
    _loader.show()

    setTimeout(() => {
      _loader.hide()
    }, 5000);

    this._loader.onLoaderStateChange().subscribe(s => console.log(s))
  }
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

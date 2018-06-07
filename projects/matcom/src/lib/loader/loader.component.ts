import { Component, OnInit } from '@angular/core';
import { LoaderService } from "../loader/loader.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'lib-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

 
show: any;
  private subscription: Subscription;
 
  constructor(private _loaderService: LoaderService) { }
  
  ngOnInit() {
    console.log(this.show);
    this.subscription = this._loaderService.loaderst
      .subscribe((state: LoaderService)=>{
          this.show = state.show;     
      });     
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}

import { Component, OnInit } from '@angular/core';
import { LoaderService } from "../loader/loader.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'lib-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  constructor(public _loaderService: LoaderService) { }

}

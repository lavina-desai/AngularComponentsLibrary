import { Injectable } from '@angular/core';
import { Subject , Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  showLoader:false;

  private loaderSubject = new Subject();

  loaderst = this.loaderSubject.asObservable();

  constructor() { }

  

  show(){
    this.loaderSubject.next(true);
  }

  hide(){
    this.loaderSubject.next(false);
  }
}

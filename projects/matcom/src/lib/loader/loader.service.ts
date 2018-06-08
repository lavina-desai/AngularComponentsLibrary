import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  onLoaderStateChange() { return this.loaderSubject.asObservable() }

  show() { this.loaderSubject.next(true) }

  hide() { this.loaderSubject.next(false) }
}

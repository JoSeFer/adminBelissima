import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AppService {

  loading$: Observable<boolean> = Observable.of(false);

  constructor() { }

  fireLoader() {
    this.loading$ = Observable.of(true);
  }

  stopLoader() {
    this.loading$ = Observable.of(false);
  }

}

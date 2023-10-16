import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public showSearchBar$ = new BehaviorSubject(false);
  getValue = this.showSearchBar$.asObservable();
  

  constructor() { }

  setValue(value: boolean) {
    this.showSearchBar$.next(value)
  }
}

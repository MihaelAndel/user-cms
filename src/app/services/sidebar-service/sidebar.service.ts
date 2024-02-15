import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _isOpened = new BehaviorSubject(false)
  isOpened$ = this._isOpened.asObservable()

  constructor() { }

  toggleSidebar () {
    this._isOpened.next(!this._isOpened.value)
  }
}

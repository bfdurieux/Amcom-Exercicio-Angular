import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InfoSidebarService {

  private _isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getIsOpen(): Observable<boolean>{
    return this._isOpen.asObservable();
  }

  setIsOpen(isOpen: boolean) {
    this._isOpen.next(isOpen);
  }
}

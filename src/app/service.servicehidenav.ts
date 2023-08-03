import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceServicehidenav {

  hide: boolean;
  constructor() {
  this.hide = false
  }

  setNavBarHidden(b: boolean){
    this.hide = b
  }
  navBarHidden(): boolean{
    return this.hide
  }

}

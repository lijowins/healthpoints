import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentUser: any = null;
  public trackables: any = null;

  constructor() { }
}

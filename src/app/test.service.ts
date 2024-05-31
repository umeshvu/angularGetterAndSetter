import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  private testValueHolder = new BehaviorSubject(null);
  getTestValueHolder = this.testValueHolder.asObservable();
  setTestValueHolder(value: any){
    this.testValueHolder.next(value);
  }
}

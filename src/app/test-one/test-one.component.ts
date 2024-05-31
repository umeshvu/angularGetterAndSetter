import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.scss']
})
export class TestOneComponent implements OnInit{

  private _myProperty!: number;

  constructor(private testService: TestService){}

  set myProperty(value: number) {
    if (value !== this._myProperty) {
      console.log(`myProperty changed from ${this._myProperty} to ${value}`);
      this._myProperty = value;
      // Additional logic here
      this.testService.setTestValueHolder(value);
    }
  }

  get myProperty(): number {
    return this._myProperty;
  }

  // Method to update the property
  updateProperty(newValue: number) {
    this.myProperty = newValue;
  }



  ngOnInit(): void {
    setInterval(()=> {
      this.myProperty = Math.random();
    },2000);
  }
}

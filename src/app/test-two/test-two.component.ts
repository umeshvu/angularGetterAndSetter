import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.scss']
})
export class TestTwoComponent implements OnInit{

  value!: string;

  constructor(private testValueService: TestService){

  }

  ngOnInit(): void {
    this.testValueService.getTestValueHolder.subscribe((value:any)=>{
      this.value = value;
    });
  }



}

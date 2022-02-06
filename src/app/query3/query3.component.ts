import { Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-query3',
  templateUrl: './query3.component.html',
  styleUrls: ['./query3.component.css']
})
export class Query3Component implements OnInit {

  @ContentChild('sample')test:ElementRef
  @ContentChildren('sample')tests:QueryList<any>
  

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInnit(){
    console.log(this.test.nativeElement.innerText);
    this.tests.forEach
  }

  
}
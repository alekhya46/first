import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  @ViewChild('example') heading :ElementRef
  @ViewChildren('example') headings:QueryList<any>

  constructor() { }

  ngOnInit(): void {
    console.log(this.heading);
  }
  ngAfterViewInit(){
    console.log(this.headings);
  this.headings.forEach((element) =>{
    console.log(element.nativeElement.innerText);
  })

  }

}

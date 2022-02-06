import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 @Input() parentData;
@Output() childEvent= new EventEmitter();
 fireEvent(){
   this.childEvent.emit('angular');
 }


  constructor() { }

  ngOnInit(): void {
  }

}

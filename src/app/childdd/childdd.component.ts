import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childdd',
  templateUrl: './childdd.component.html',
  styleUrls: ['./childdd.component.css']
})
export class ChildddComponent implements OnInit {
  @Input() getInstruction;
  @Output()
  childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  replyMethod(event:any){
    this.childEvent.emit(event.target.value)
  }

}

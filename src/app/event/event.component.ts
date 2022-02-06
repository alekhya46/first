import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  greeting="";
  OnClick(){
    console.log("welcome");
    this.greeting="welcome to angular";
  }

  constructor() { }

  ngOnInit(): void {
  }

}

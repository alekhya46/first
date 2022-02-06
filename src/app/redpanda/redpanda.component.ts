import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redpanda',
  templateUrl: './redpanda.component.html',
  styleUrls: ['./redpanda.component.css']
})
export class RedpandaComponent implements OnInit {
  customerAge: number;
  customerName;
  details: boolean;

  constructor() { }

  ngOnInit(): void {
  }swimmingpass(){
    if(this.customerAge>=10){
    // return 'green';
    return 'success';
    }
    else{
      // return 'red';
      return 'failure'
    }
  }
  pubpass(){
    if(this.customerAge>=21){
      return 'success';
      }
      else{
        return 'failure';
      }
  }
  detailsSubmission(){
    this.details=true;
  }

}

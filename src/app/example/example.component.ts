import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  customername;
  customerage=30;
  details=false;

  constructor() { }

  ngOnInit(): void {
  }
  swimmingpass(){
    if(this.customerage>=10){
    return true;
    }
    else{
      return false;
    }
  }
  pubpass(){
    if(this.customerage>=21){
      return true;
      }
      else{
        return false;
      }
  }
  detailsSubmission(){
    this.details=true;
  }
empDetails = [
  {
  empname: 'doremon',
  empId : 200,
  designation :'ceo'
},
{
  empname: 'shinchan',
  empId : 100,
  designtion: 'manager'
}


]
}

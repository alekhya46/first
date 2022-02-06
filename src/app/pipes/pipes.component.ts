import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  searchItem;

  constructor() { }

  ngOnInit(): void {
  }
  empData =[
    {
      empName :'alekhya',
      empSalary:2000000,
      DOB: "04/06/1994",
      Designation :"developer"
    },
    {
      empName :'puja',
      empSalary:2000000,
      DOB: "04/06/1994",
      Designation :"developer"
    },
    {
      empName :'teja',
      empSalary:2000000,
      DOB: "04/06/1994",
      Designation :"developer"
    }]

}

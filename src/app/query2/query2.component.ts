import { Component, OnInit } from '@angular/core';
import { ObserveService } from '../observe.service';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit {

  constructor(private serv:ObserveService) { }

  ngOnInit(): void {
    this.serv.sendData.subscribe(res=>{
      console.log(res)
    })
    this.serv.giveData.subscribe(dev=>{
      console.log(dev)
    })
    this.serv.createObs().subscribe(ved=>{
      console.log(ved)
    })
  }
  

}

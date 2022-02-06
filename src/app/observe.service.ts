import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import{filter,map,tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ObserveService {

  // constructor() { }
  // createObservable(){
  //   return new Observable((observer) => {
  //     let count =0;
  //     setInterval(() => {
  //       count++;
  //       observer.next(count)
  //       if(count>4){
  //         observer.error('i am a error')
  //       }
  //       if(count>5){
  //         observer.complete()
  //       }
  //     },1000)
  //   }).pipe(filter((value:any) =>{
  //     if(value %2==0){
  //       return value
  //     }
  //   }),map((value)=>{
  //     return 'the value is'+value;
  //   })

  //   )
  // }
  sendData = new Observable((res)=>{
  const arr= [1,2,3,4]
  res.next({aa : 'alekhya',
            place:'hyd'});
  res.next(arr);
  })
 
 
  giveData = new Observable((dev)=>{ 
    dev.next(['mango','orange'])
  })

  createObs(){
    return new Observable((arc)=>{
  
      
      arc.next(['mango',2,3,4])
      
      
    })
  }





}





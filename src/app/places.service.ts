import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
places=[
  {
    pName : 'banglore',
    dist :600,
    weather: 'cool'
  },
  {
    pName : 'kashmir',
    dist :800,
    weather: 'freezing'
  },
  {
    pName : 'delhi',
    dist :400,
    weather: 'hot'
  }

]
  constructor() 
   
   {}
   onRequest(data)
   {
     console.log(`hello ${data}`);

   }
   
  callingFromHtml(){
  
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  // fname: string ='alekhya'
  // id =10;
  // companyName :string ='technoelevate';
  // salary :string = '20lakh per annum'
  // imgurl;
  // link;
  // ans;
  // newMagic;
  
  // content: string = 'helooooo there hii ';
  product ='hello';

  constructor() {
  //   setTimeout(() => {
  //     this.fname = 'shinchan'
    
      
  //   }, 2000);
   }

  ngOnInit(): void {
    // let ans = prompt("do u love dog?");
    // if(ans=='cat'){
    //   this.imgurl="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg";
    // }
    // else{
    //   this.imgurl="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__340.jpg";
    // }

  //    this.ans = prompt("open google or youtube");
  //   if(this.ans=='google'){
  //     this.link="https://www.google.co.in/";
    
  //   }
  //  else
  //  {
  //    this.link="https://www.youtube.com/";
  //  }
   
    }
    // magic(){
    //   alert('no magic get lost ');
    // }
//     magic()
// {
//   this.content='no magic';
// }
// magic(event:any){
//   this.newMagic=event.target.value;
// };
// createMagic(){
//   this.content =`${this.newMagic} magic has been create`;
// }
// magic(event :any){
// this.content = event.target.value;
// }

}



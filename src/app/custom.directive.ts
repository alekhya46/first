import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ele:ElementRef) {
    this.ele.nativeElement.Style.color ="green"

   }
@HostListener('mouseenter')onMouseover(){
  this.ele.nativeElement.Style.color='yellow'
}
}

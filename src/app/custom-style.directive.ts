import { Directive, ElementRef } from '@angular/core';
//import ElementRef

@Directive({
  selector: '[appCustomStyle]',
})
export class CustomStyleDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
}

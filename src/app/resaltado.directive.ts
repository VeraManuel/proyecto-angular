import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Resaltado]'
})
export class ResaltadoDirective {

  constructor( public el: ElementRef) {
    

   }

   ngOnInit(){
    var element = this.el.nativeElement;

    element.style.background = 'blue';
    element.style.color = 'white';
   }

}

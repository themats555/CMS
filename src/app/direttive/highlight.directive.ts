import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

   // inizialmente l'elemento a cui sarà applicata questa direttiva (appHighlight)
  // sarà giallo
  constructor(private element: ElementRef) { 
  }

  // // Quando passerà il mouse sull'elemento verrà evidenziato di verde
  // @HostListener('mouseenter') onMouseEnter(){
  //   this.element.nativeElement.style.backgroundColor = 'green';
  // }

  // // Quando il mouse non sarà sopra l'elemento diventerà trasparente
  // @HostListener('mouseleave') onMouseLeave(){
  //   this.element.nativeElement.style.backgroundColor = 'transparent';
  // }

  @HostListener('click') onClick(){
    this.element.nativeElement.style.backgroundColor = 'black';
  }

}

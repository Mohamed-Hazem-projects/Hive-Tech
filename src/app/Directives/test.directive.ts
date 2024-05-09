import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[test]',
  standalone: true
})
export class Test2Directive implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = 'red'
    // this.element.nativeElement.style.width = '100px'
    // this.element.nativeElement.style.height = '100px'
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red')
    this.renderer.setStyle(this.element.nativeElement, 'width', '100px')
    this.renderer.setStyle(this.element.nativeElement, 'height', '100px')
  }



}

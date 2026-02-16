import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appListener]',
  standalone: true
})
export class ListenerDirective {

  constructor(private eleref:ElementRef,private render:Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData:Event)
  {
    this.render.setStyle(this.eleref.nativeElement,'background-color','cyan');
  }
  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    this.render.setStyle(this.eleref.nativeElement,'background-color','white');
  }
}

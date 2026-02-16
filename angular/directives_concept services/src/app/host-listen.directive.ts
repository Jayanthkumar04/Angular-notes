import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListen]',
  standalone: true
})
export class HostListenDirective {

  constructor(private eleRef:ElementRef,private rend:Renderer2,) { }

  @HostListener('mouseenter') mouseover(eventData:Event)
  {
    this.rend.setStyle(this.eleRef.nativeElement,'background-color',"yellow");
  }
  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    this.rend.setStyle(this.eleRef.nativeElement,'background-color',"red");
  }

}

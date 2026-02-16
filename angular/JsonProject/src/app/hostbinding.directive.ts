import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]',
  standalone: true
})
export class HostbindingDirective implements OnInit{

@Input() hoverColor="green";
@Input() removeColor="blue";

  @HostBinding('style.backgroundColor') backGroundColor="transparent"
  constructor(private eleref:ElementRef,private render:Renderer2) { }
  
  ngOnInit(): void {
      throw new Error("not found buddy");
  }

  @HostListener('mouseenter') mouseover(eventData:Event)
  {
    this.backGroundColor=this.hoverColor;
  }
  @HostListener('mouseout') mouseleave(eventData:Event)
  {
    this.backGroundColor= this.removeColor;
  }
}

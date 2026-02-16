import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHostBind]',
  standalone: true
})
export class HostBindDirective implements OnInit{

  @HostBinding('style.backgroundColor') backGroundcolor="red";
  constructor() { }

  ngOnInit(): void {
      

  }

  
  @HostListener('mouseenter')   mouseover(eventData:Event)
  {
        this.backGroundcolor="green";
  }
  @HostListener('mouseleave')   mouseLeave(eventData:Event)
  {
        this.backGroundcolor="yellow";
  }
}

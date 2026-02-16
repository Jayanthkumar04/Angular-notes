import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRender]',
  standalone: true
})
export class RenderDirective implements OnInit{

  constructor(private eleref:ElementRef,private render:Renderer2) { }

  ngOnInit(): void {
      this.render.setStyle(this.eleref.nativeElement,'background-color','blue');
  }
}

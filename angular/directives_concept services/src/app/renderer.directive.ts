import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer]',
  standalone: true
})
export class RendererDirective implements OnInit {

  constructor(private eleRef:ElementRef,private rend:Renderer2) { }

  ngOnInit(): void {
      this.rend.setStyle(this.eleRef.nativeElement,'background-color','yellow');
  }

}

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasichighlight]',
  standalone: true
})
export class BasichighlightDirective implements OnInit {

  constructor(private eleref:ElementRef) {
   }
  ngOnInit(): void {
    
    this.eleref.nativeElement.style.backgroundColor="green";

  }
}

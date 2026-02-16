import { Directive, ElementRef ,OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit{

  constructor(private eleRef:ElementRef) { }

  ngOnInit(): void {
      this.eleRef.nativeElement.style.backgroundColor="green";
  }

}

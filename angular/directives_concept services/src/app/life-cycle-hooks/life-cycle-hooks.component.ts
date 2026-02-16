import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  count:number=1;
  constructor()
  {
    console.log('constructor ',this.count);
    ++this.count;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonchanges ',this.count);
      ++this.count;
  }

  ngOnInit(): void {
    console.log('ngonInit ',this.count);
    ++this.count;
  }
  ngDoCheck(): void {
    console.log('ngDoCheck ',this.count);
    ++this.count;
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit ',this.count);
    ++this.count;
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked ',this.count);
    ++this.count;
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ',this.count);
    ++this.count;
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked ',this.count);
    ++this.count;
  }

  ngOnDestroy(): void {
    console.log('destryo ',this.count);
    ++this.count;
  }

}

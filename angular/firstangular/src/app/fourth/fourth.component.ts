import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [],
  // templateUrl: './fourth.component.html',
  template:
  `
  
<h2>i am fourth</h2>
<h2>fourth component is for inline css and html</h2>
  `
  ,
  // styleUrl: './fourth.component.css'
styles:
[//inline css and html
`
  h2{
    color:red;
  }
`
]

})
export class FourthComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-visiting-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visiting-card.component.html',
  styleUrl: './visiting-card.component.css'
})
export class VisitingCardComponent {

 customers:any[]=[];

 constructor()
 {
  this.customers=[
{
  name:"jayanth kumarr",
  age:20,
  address:
    [
      'kondapur',
      'hyderabad'
    ]
  ,
  contact:9876868

},
{
  name:"yashwanth",
  age:23,
  address:[
    
      'sarathi nagar',
      'khammam'
    
  ],
  contact:879878768

}

  ]
 }

}

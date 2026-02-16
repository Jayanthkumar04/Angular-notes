import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

answer:boolean=true;
ans:string="";
ans2:string="jayanth"

friends:any[]=[];
constructor(){

  
  setInterval(()=>{
      
    this.answer=Math.random()>0.5?true:false;


  },1000)


 
this.friends=[
  {
    "name":"yashwanth",
    "contact":"7981348657",
    "age":10,
    "address":[
    
      'chennai',
      'khammam'

    ],
    "girlfriend":"yes"
  },
  {
    "name":"rahul",
    "contact":"9981348657",
    "age":15,
    "address":[
    
      'banglore',
      'khammam'

    ],
    "girlfriend":"no"
  }

]

}

display(ans:string)
{
  this.ans=ans;
}




}

import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.css'
})
export class FourthComponent {

name:string="";
age:number=0;
address:string="";
gender:string="";

friends:any[]=[];

constructor(){
this.friends=[
{
   name:"jayanth",
   age:20,
   address:"banglore",
   gender:"male"

},
{
  name:"yash",
  age:23,
  address:"khamamm",
  gender:"male"

},
{
  name:"shivatmika",
  age:21,
  address:"nellore",
  gender:"female"

},
{
  name:"jyoti",
  age:22,
  address:"hyd",
  gender:"female"

}

]
} 

}

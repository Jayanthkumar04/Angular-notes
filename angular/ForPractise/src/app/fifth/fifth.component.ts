import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FCountComponent } from '../f-count/f-count.component';

@Component({
  selector: 'app-fifth',
  standalone: true,
  imports: [CommonModule,FormsModule,FCountComponent],
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.css'
})
export class FifthComponent {
  
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
getLatest()
{
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

getLatestData(){

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
   
   },
   {
    name:"kumar",
    age:90,
    address:"sl",
    gender:"male"
   },
   {
    name:"giri",
    age:25,
    address:"kurnool",
    gender:"female"
   }

   ] 
}
trackByCode(index:number,friend:any):string{
  return friend.code;
}

allCount():number
{
return this.friends.length;
}

maleCount():number{
  return this.friends.filter(f=>f.gender.toLowerCase()=="male").length;

}

femaleCount():number{

  return this.friends.filter(f=>f.gender.toLowerCase()=="female").length;
}

onFriendChange(selectedRadioButtonValue:string):void
{
  console.log("selected radion button ==> "+selectedRadioButtonValue)
}
} 

  



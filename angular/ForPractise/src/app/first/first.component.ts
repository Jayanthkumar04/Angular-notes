import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VisitingCardComponent } from '../visiting-card/visiting-card.component';
import { SecondComponent } from '../second/second.component';
import { ThirdComponent } from '../third/third.component';
import { FourthComponent } from '../fourth/fourth.component';
import { FifthComponent } from '../fifth/fifth.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule,FormsModule,VisitingCardComponent,SecondComponent,ThirdComponent,FourthComponent,FifthComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  // firstName:string;
  // lastName:string;
  // date:string="";
  // controlFlag:boolean=true;
  // classStatus:string="";
  // example:string="jayanth";
  // constructor()
  // {
  //   this.firstName="jayanth";
  //   this.lastName="yadavalli"
     
    


  // setInterval(() => {
  //   let currdate = new Date();
  //   this.date=currdate.toDateString()+"  "+currdate.toTimeString();
  //   this.controlFlag=Math.random()>0.5?true:false;
  // },3000);

  // }

  // getFirstName():string{
  //   return this.firstName;
  // }
  // getLastName():string{
  //   return this.lastName;
  // }

  // diplayCourse(classStatus:string)
  // {
  //   this.classStatus=classStatus;
  // }


// friends:any[]=[];

// constructor(){
// this.friends=[
// {
//    name:"jayanth",
//    age:20,
//    address:"banglore",
//    gender:"male"

// },
// {
//   name:"yash",
//   age:23,
//   address:"khamamm",
//   gender:"male"

// },
// {
//   name:"shivatmika",
//   age:21,
//   address:"nellore",
//   gender:"female"

// },
// {
//   name:"jyoti",
//   age:22,
//   address:"hyd",
//   gender:"female"

// }

// ]

// getLatest()
// {
//  this.friends=[

//   {
//     name:"jayanth",
//     age:20,
//     address:"banglore",
//     gender:"male"
 
//  },
//  {
//    name:"yash",
//    age:23,
//    address:"khamamm",
//    gender:"male"
 
//  },
//  {
//    name:"shivatmika",
//    age:21,
//    address:"nellore",
//    gender:"female"
 
//  },
//  {
//    name:"jyoti",
//    age:22,
//    address:"hyd",
//    gender:"female"
 
//  }
//  ] 
// }
// } 


  

}

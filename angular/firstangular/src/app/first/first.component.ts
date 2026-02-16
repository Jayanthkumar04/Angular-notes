import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { ThirdComponent } from '../third/third.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [SecondComponent,FormsModule],
  templateUrl: './first.component.html',

  // template:`
  
  // <h2>hi iam loading from ts filee not from html page
   

  // `,
  // styleUrl: './first.component.css'

  styles:[

    
    `
    
    h1{
    color:green;
    }
    `

  ]
})
export class FirstComponent {

  controlFlag=true;

  toogleColor ="white";
  subjectName="";

  guestName="Jayanth Kumar";
constructor(){
  setInterval(() => {
    
    this.controlFlag = Math.random()>0.5?true:false;
     

  }, 2000);
}

toggle(){

  if(this.toogleColor === "white"){
  document.body.style.backgroundColor="black";
  this.toogleColor="black";
  }
  else{
    document.body.style.backgroundColor="white";
   this.toogleColor="white";
  }
  

}

display(subName:string)
{
  this.subjectName=subName;
}

}

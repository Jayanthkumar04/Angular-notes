import { Component } from '@angular/core';
import { ThirdComponent } from '../third/third.component';
import { SecondComponent } from '../second/second.component';
import { FormsModule } from '@angular/forms';
import { VisitingcardComponent } from '../visitingcard.component';
import { User } from '../user';
import { EmpDetailsComponent } from '../emp-details/emp-details.component';
import { DefaultpipeComponent } from '../defaultpipe/defaultpipe.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [ThirdComponent,SecondComponent,FormsModule,VisitingcardComponent,EmpDetailsComponent,DefaultpipeComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  msg:string='Hello Ashok IT';
  userName:string="";
  firstName:string="";
  lastName:string="";
  email:string="";

  dateString:string="";
  controlFlag:boolean=false;
  classStatus:string="";
  guestName:string="Vijay Kumar";
  inputName:string="Nilesh Kumar";

  userInput:User=new User;


  constructor(){


    this.userInput.username="Avishek Kumar";
    this.userInput.salary="200000";
    this.userInput.title="Technical Manager";
    this.userInput.department="2";
    this.userInput.address=[
      'Madhapur',
      'Hyderabad'
    ]
    this.userInput.phones=[
      '222-222-2222',
      '444-444-4444'
    ]

    this.userName="ashokit";
    this.firstName="Ashok";
    this.lastName="IT";
    this.email="ashok.it@gmail.com";

    setInterval (  () => {
      let currentDate=new Date();
      this.dateString=currentDate.toDateString() + "  " + currentDate.toLocaleTimeString();

      this.controlFlag=Math.random()> 0.5 ? true : false;
    }
    ,5000)
  }

  getUserName():string{
    return this.userName;
  }

  getFirstName():string{
    return this.firstName;
  }

  getLastName():string{
    return this.lastName;
  }

  getEmail():string{
    return this.email;
  }

  updateCourse(courseName:string){
    this.classStatus=courseName + "   " + " Class is Started";

  }

}

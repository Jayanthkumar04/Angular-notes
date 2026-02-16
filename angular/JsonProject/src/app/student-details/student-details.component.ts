import { CommonModule } from '@angular/common';
import { Component, Input,OnInit } from '@angular/core';
import { TitlePipe } from '../title.pipe';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule,TitlePipe],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
/*
  students:any[]=[];

  constructor(){

    this.students=[

       {  
        stuName:'yash',
        stuAge:20,
        gender:"male",
        dept:1

       },
       {
        stuName:'rani',
        stuAge:23,
        gender:"female",
        dept:2
       }


    ]


  }


*/
//SECOND TOPIC

students: any[] = [];

  @Input() stuName: string = "";
  @Input() stuAge: number = 0;
  @Input() gender: string = "";
  @Input() dept: number = 0;

  @Input() stuName2: string = "";
  @Input() stuAge2: number = 0;
  @Input() gender2: string = "";
  @Input() dept2: number = 0;
  constructor() {}

  ngOnInit() {
    this.students = [
      {
        stuName: this.stuName,
        stuAge: this.stuAge,
        gender: this.gender,
        dept: this.dept
      },
      {
        stuName: this.stuName2,
        stuAge: this.stuAge2,
        gender: this.gender2,
        dept: this.dept2
      
      }
    ];
  }
}

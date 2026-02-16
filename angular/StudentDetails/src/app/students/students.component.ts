import { CommonModule } from '@angular/common';
import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  students:any=[];

  @Input('name') appName:string="";

  @Input('phone') phone:string="";

  @Input("room") room:string="";
  ngOnInit(){

    this.students=[
  
    {
         stuName:"jayanth",
         stuAge:24,
         gender:"male",
         address:[
              "hyd",
              "nellore"
         ],
         appName:this.appName,
         phName:this.phone,
         room:this.room



    },
    {

     stuName:"yashwanth",
     stuAge:22,
     gender:"male",
     address:[
          "hyd",
          "nellore"
     ],
     appName:this.appName




    },
    {

     stuName:"shivatmika",
     stuAge:20,
     gender:"female",
     address:[
          "hyd",
          "nellore"
     ],
     appName:this.appName



    }


  


   ]

  }

}

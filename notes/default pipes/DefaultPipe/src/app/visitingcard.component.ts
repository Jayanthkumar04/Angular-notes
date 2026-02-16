import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-visitingcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitingcard.component.html',
  styleUrl: './visitingcard.component.css'
})
export class VisitingcardComponent {

  customers:any[]=[];

  //@Input('name') username:string="";
  @Input('inputJson') userObj:User=new User;

  constructor(){
    
  }

  ngOnInit(){


    this.customers=[
      {
       custname:'Sandhya Rani',
     
       title:'Software Lead',
       salary:'100000',
       department:'1',
       address:[
              '2-22-222',
              'Gachibowli',
              'Hyderabad'
       ],
       phones:[
             '111-1111-111',
             '222-222-2222'
       ]
      },

      {
        //custname:'Vijay Kumar',
        custname:this.userObj.username,
        title:this.userObj.title,
        salary:this.userObj.salary,
        department:this.userObj.department,
        address:this.userObj.address,
        phones:this.userObj.phones
      }

    ]
  }


}

import { CommonModule } from '@angular/common';
import { Component,Input,input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-visitingcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitingcard.component.html',
  styleUrl: './visitingcard.component.css'
})
export class VisitingcardComponent {

  customers:any[]=[];

  // @Input('name') userName:String="";
  @Input('inputJson') userObj:User[]=[];
  constructor(){

  }

  ngOnInit()
  {
    this.customers = this.userObj.map(user => ({
      custname: user.userName,
      title: user.title,
      salary: user.salary,
      department: user.department,
      address: user.address,
      phones: user.phones
    }));







       // {
      //  custname:'Sandhya Rani',
      //  title:'Software Lead',
      //  salary:'100000',
      //  department:'1',
      //  address:[
      //         '2-22-222',
      //         'Gachibowli',
      //         'Hyderabad'
      //  ],
      //  phones:[
      //        '111-1111-111',
      //        '222-222-2222'
      //  ]
      // },


    
  }




    
}

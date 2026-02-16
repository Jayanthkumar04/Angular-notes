import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitlePipe } from '../title.pipe';

@Component({
  selector: 'app-emp-details',
  standalone: true,
  imports: [CommonModule,TitlePipe],
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.scss'
})
export class EmpDetailsComponent {

   date:Date=new Date();
  employees:any[]=[];

  constructor(){
  this.employees=[

    {empid:'101',empname:'Pragati',gender:'Female',title:'Software Developer',salary:'990000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'102',empname:'Akash',gender:'Male',title:'Sr Software Developer',salary:'120000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'103',empname:'Jhansi',gender:'Female',title:'Software Lead',salary:'150000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'104',empname:'Hemanth',gender:'Male',title:'Software Manager',salary:'200000',department:'4',address:'Delhi',dob:'04/04/1980'},

{empid:'105',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'110000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'106',empname:'Farooq',gender:'Male',title:'Sr Software Developer',salary:'130000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'107',empname:'Priyanka',gender:'Female',title:'Software Lead',salary:'160000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'108',empname:'Rakesh',gender:'Male',title:'Software Manager',salary:'210000',department:'4',address:'Delhi',dob:'04/04/1980'},


{empid:'109',empname:'Sandhya',gender:'Female',title:'Software Developer',salary:'120000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'110',empname:'Sankar',gender:'Male',title:'Sr Software Developer',salary:'140000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'111',empname:'Soumya',gender:'Female',title:'Software Lead',salary:'170000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'112',empname:'Sathya',gender:'Male',title:'Software Manager',salary:'220000',department:'4',address:'Delhi',dob:'04/04/1980'},


{empid:'113',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'130000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'114',empname:'Vivek',gender:'Male',title:'Sr Software Developer',salary:'150000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'115',empname:'Komal',gender:'Female',title:'Software Lead',salary:'180000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'116',empname:'Varun',gender:'Male',title:'Software Manager',salary:'230000',department:'4',address:'Delhi',dob:'04/04/1980'}




  ]

}

getLatestData(){
  this.employees=[

  {empid:'101',empname:'Pragati',gender:'Female',title:'Software Developer',salary:'60000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'102',empname:'Akash',gender:'Male',title:'Sr Software Developer',salary:'120000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'103',empname:'Jhansi',gender:'Female',title:'Software Lead',salary:'150000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'104',empname:'Hemanth',gender:'Male',title:'Software Manager',salary:'200000',department:'4',address:'Delhi',dob:'04/04/1980'},

{empid:'105',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'110000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'106',empname:'Farooq',gender:'Male',title:'Sr Software Developer',salary:'130000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'107',empname:'Priyanka',gender:'Female',title:'Software Lead',salary:'160000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'108',empname:'Rakesh',gender:'Male',title:'Software Manager',salary:'210000',department:'4',address:'Delhi',dob:'04/04/1980'},


{empid:'109',empname:'Sandhya',gender:'Female',title:'Software Developer',salary:'120000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'110',empname:'Sankar',gender:'Male',title:'Sr Software Developer',salary:'140000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'111',empname:'Soumya',gender:'Female',title:'Software Lead',salary:'170000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'112',empname:'Sathya',gender:'Male',title:'Software Manager',salary:'220000',department:'4',address:'Delhi',dob:'04/04/1980'},


{empid:'113',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'130000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'114',empname:'Vivek',gender:'Male',title:'Sr Software Developer',salary:'150000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'115',empname:'Komal',gender:'Female',title:'Software Lead',salary:'180000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'116',empname:'Varun',gender:'Male',title:'Software Manager',salary:'230000',department:'4',address:'Delhi',dob:'04/04/1980'},
  
{empid:'117',empname:'Latha',gender:'Female',title:'Software Lead',salary:'125000',department:'3',address:'Banglore',dob:'03/03/1971'},
{empid:'118',empname:'Giri',gender:'Male',title:'Software Manager',salary:'220000',department:'4',address:'Delhi',dob:'04/04/1972'}

]
}

trackByEmpid(index:number,employee:any):string
{
return employee.code
}


}

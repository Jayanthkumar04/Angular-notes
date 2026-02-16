import { Component, Input } from '@angular/core';
import { User } from '../external/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})

export class EmployeeComponent {

  employees:any[]=[];
  @Input('userD') userDetails:User[]=[]; 

   ngOnInit()
   {
    this.employees=this.userDetails.map(

      user=>{
           userName:user.userName;
           name:user.empName;
           salary:user.salary;
           address:user.address;

      }

    )
    
  }

}

import { Component,OnInit} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { User } from './user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-external',
  standalone: true,
  imports: [EmployeeComponent,CommonModule,FormsModule],
  templateUrl: './external.component.html',
  styleUrl: './external.component.scss'
})
export class ExternalComponent {

user:User[]=[];

constructor(){
const user1:User={

  userName:"yash@04",
  empName:"yash",
  salary:"30000",
  address:["hyd","kmm"]
}
const user2:User={

  userName:"jay@04",
  empName:"jayanth",
  salary:"30000",
  address:["hyd","kurrnool"]
}


this.user.push(user1,user2);

}

}

import { Component } from '@angular/core';
import { VisitingcardComponent } from '../visitingcard/visitingcard.component';
import { User } from '../user';
import { EmpDetailsComponent } from '../emp-details/emp-details.component';
import { DefaultpipeComponent } from '../defaultpipe/defaultpipe.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { EmpCountComponent } from '../emp-count/emp-count.component';
import { BasichighlightDirective } from '../basichighlight.directive';
import { RenderDirective } from '../render.directive';
import { ListenerDirective } from '../listener.directive';
import { HostbindingDirective } from '../hostbinding.directive';


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [VisitingcardComponent,EmpDetailsComponent,DefaultpipeComponent,StudentDetailsComponent,BasichighlightDirective,RenderDirective,ListenerDirective,HostbindingDirective],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  userInput:User[]=[];
  
  // constructor(){
    
  //   this.userInput.userName="yashwanth",
  //   this.userInput.title="pyton dev",
  //   this.userInput.salary="2000000",
  //   this.userInput.department="3",
  //   this.userInput.address=[
  //     'khammam',
  //     'narsinghi'
  //   ],
  //   this.userInput.phones=[
  //     "1234",
  //     "5678"
  //   ]

  

  // }


  constructor()
  {

    const user1:User={

      userName: "Yashwanth",
      title: "Python Dev",
      salary: "2000000",
      department: "3",
      address: ['Khammam', 'Narsinghi'],
      phones: ["1234", "5678"]

    }

    const user2:User={

      userName: "jayanth kumar",
      title: "java Dev",
      salary: "3000000",
      department: "2",
      address: ['kurnool', 'banjarahills'],
      phones: ["1234", "5678"]

    }
    const user3:User={

      userName: "jayanth kumar",
      title: "java Dev",
      salary: "3000000",
      department: "2",
      address: ['kurnool', 'banjarahills'],
      phones: ["1234", "5678"]

    }


    this.userInput.push(user1,user2,user3);

  }



}

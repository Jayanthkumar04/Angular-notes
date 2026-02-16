import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../reverse.pipe';
import { FCountComponent } from '../f-count/f-count.component';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CommonModule,FormsModule,ReversePipe,FCountComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})


export class ThirdComponent {

  test:any[]=[];

  @Input() 
  userName:string="";
  @Input()
  userAge:number=0;
  @Input()
  userAddress:string="";
  @Input()
  userGender:string="";


  @Input() 
  userName1:string="";
  @Input()
  userAge1:number=0;
  @Input()
  userAddress1:string="";
  @Input()
  userGender1:string="";
  

  constructor()
  {

  }
  ngOnInit()
  {
    this.test=[
 {
      uName:this.userName,
      uAge:this.userAge,
      uAddress:this.userAddress,
      uGender:this.userGender

 } ,
 {
  uName:this.userName1,
  uAge:this.userAge1,
  uAddress:this.userAddress1,
  uGender:this.userGender1
} 
  ]
  }

}

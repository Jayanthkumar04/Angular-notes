import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-defaultpipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defaultpipe.component.html',
  styleUrl: './defaultpipe.component.css'
})
export class DefaultpipeComponent {


  var_one:string="angularjs";
  var_two:string="REACTJS";
  var_three:string="node js";

  var_four:number=100.12345;
  var_five:number=10000;

  var_six:Date=new Date();
  var_seven:any={num:100};

  var_eight:any="TI  KOHSA ";




}

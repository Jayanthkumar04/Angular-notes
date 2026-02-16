import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-f-count',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './f-count.component.html',
  styleUrl: './f-count.component.css'
})
export class FCountComponent {
   
  @Input()
  all:number=0;
  @Input()
  male:number=0;
  @Input()
  female:number=0;

  selectedRadioButtonValue:string="all";



  @Output()
  countRadioButton:EventEmitter<string> = new EventEmitter<string>();
  

  onRadioChange()
  {
    this.countRadioButton.emit(this.selectedRadioButtonValue);

  }

}

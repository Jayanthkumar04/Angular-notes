import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-count',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-count.component.html',
  styleUrl: './emp-count.component.css'
})
export class EmpCountComponent {

  @Input()
  All:number=30;

  @Input()
  Male:number=20;

  @Input()
  Female:number=10;

  selectedRadioButtonValue:string='All';

  // selectedRadioButtonValue:string='female';
  
  // selectedRadioButtonValue:string='male';

  @Output()
  countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();

  onRadioButtonChange(){

    console.log("clicked radio button is ==> ",this.selectedRadioButtonValue);

    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

}

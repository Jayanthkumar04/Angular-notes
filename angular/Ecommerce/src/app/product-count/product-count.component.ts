import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-count',
  standalone: true,
  imports: [CommonModule,FormsModule,ProductDetailsComponent],
  templateUrl: './product-count.component.html',
  styleUrl: './product-count.component.css'
})
export class ProductCountComponent {

  @Input()
  all:number=0;
  @Input()
  electric:number=0;
  @Input()
  electronic:number=10;
  @Input()
  grocery:number=20;

  selectedValue:string="all";

  @Output()
  countRadioButtonSelection:EventEmitter<string>=new EventEmitter<string>();

  onRadioChange()
  {
  
    console.log("button is==>"+this.selectedValue);
    this.countRadioButtonSelection.emit(this.selectedValue);
  
  }

}

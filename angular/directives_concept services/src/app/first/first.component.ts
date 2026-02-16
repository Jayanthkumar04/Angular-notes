import { Component } from '@angular/core';
import { CclogoDirective } from '../cclogo.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesComponent } from '../countries/countries.component';
import { LifeCycleHooksComponent } from '../life-cycle-hooks/life-cycle-hooks.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CclogoDirective,CommonModule,FormsModule,CountriesComponent,LifeCycleHooksComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  cardNumber:string="";

  

}

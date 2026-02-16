import { Component } from '@angular/core';
import { FourthComponent } from '../fourth/fourth.component';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [FourthComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {

}

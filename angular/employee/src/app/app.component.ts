import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { TitlePipe } from './title.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employee';
}

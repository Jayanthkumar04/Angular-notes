import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RazorpageComponent } from './razorpage/razorpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RazorpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RazorpayTesting';
}

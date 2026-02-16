import { Component } from '@angular/core';
import customer from '../../Model/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  customers!:customer[];
  constructor(public srv:CustomerService)
  {
        this.diplay();
  }
  diplay()
  {
        this.srv.display().subscribe(
          {
            next:(data)=>{
               this.customers=data;
               console.log(data);
            }
          }
        )
  }
        

}

import { Component } from '@angular/core';
import customer from '../../Model/customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

   customer!:customer;

   addCustomer(data:NgForm)
   {
    console.log(data.value);
   }
}

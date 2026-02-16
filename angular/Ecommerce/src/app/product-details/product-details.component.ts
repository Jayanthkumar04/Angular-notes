import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCountComponent } from '../product-count/product-count.component';
import { ActualpricePipe } from '../actualprice.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,FormsModule,ProductCountComponent,ActualpricePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

products:any[]=[];
selectedValue:string="all";
constructor()
{
  this.products=[

    {
     
      prodname:"motor",qty:10,price:7000,discount:15,expirydate:"02/02/2024",rating:3,type:"electric"

    },
    {
     
      prodname:"switch",qty:19,price:600,discount:6,expirydate:'02/02/2026',rating:5,type:"electric"

    },
    {
     
        prodname:"wire",qty:12,price:3000,discount:4,expirydate:'02/02/2022',rating:5,type:"electric"

    },
    {
     
      prodname:"ceiling fan",qty:10,price:100000,discount:10,expirydate:'02/08/2026',rating:5,type:"electric"

    },
    {
     
      prodname:"camera",qty:20,price:40000,discount:5,expirydate:'09/11/2026',rating:5,type:"electric"

    },
    {
     
      prodname:"smartwatch",qty:10,price:4000,discount:7,expirydate:'19/03/2024',rating:4,type:"electronic"

    },
    {
     
      prodname:"copier",qty:10,price:50000,discount:4,expirydate:'21/02/2029',rating:5,type:"electronic"

    },
    {
     
      prodname:"iron",qty:4,price:7000,discount:7,expirydate:'12/05/2029',rating:5,type:"electronic"

    },
    
    {
     
      prodname:"lights",qty:10,price:100,discount:5,expirydate:'02/02/2026',rating:2,type:"grocery"

    },
    {
     
      prodname:"books",qty:100,price:100000,discount:10,expirydate:'14/03/2026',rating:5,type:"grocery"

    },
    {
     
      prodname:"shirt",qty:10,price:2000,discount:25,expirydate:'05/02/2026',rating:5,type:"grocery"

    },
    {
     
      prodname:"Watermelon",qty:1,price:30,discount:2,expirydate:'09/01/2026',rating:5,type:"grocery"

    },
    {
     
      prodname:"boost",qty:10,price:5000,discount:5,expirydate:'03/05/2026',rating:5,type:"grocery"

    },
    {
     
      prodname:"maggi",qty:10,price:50,discount:10,expirydate:'07/03/2029',rating:5,type:"grocery"

    },
    {
     
      prodname:"oil",qty:5,price:200,discount:10,expirydate:'03/06/2025',rating:4,type:"grocery"

    },
    {
     
      prodname:"chips",qty:100,price:60,discount:3,expirydate:'04/02/2026',rating:5,type:"grocery"

    },
    {
     
      prodname:"bucket",qty:6,price:100,discount:5,expirydate:'02/03/2023',rating:3,type:"grocery"

    },
    {
     
      prodname:"potato",qty:10,price:50,discount:10,expirydate:'05/05/2024',rating:4,type:"grocery"

    }

  ]
}

onrefresh()
{
  this.products=[

    {
     
      prodname:"motor",qty:10,price:7000,discount:15,expirydate:"02/02/2024",rating:3,type:"electric"

    },
    {
     
      prodname:"switch",qty:19,price:600,discount:6,expirydate:'02/02/2026',rating:5,type:"electric"

    },
    {
     
        prodname:"wire",qty:12,price:3000,discount:4,expirydate:'02/02/2022',rating:5,type:"electric"

    },
    {
     
      prodname:"ceiling fan",qty:10,price:100000,discount:10,expirydate:'02/08/2026',rating:5,type:"electric"

    },
    {
     
      prodname:"camera",qty:20,price:40000,discount:5,expirydate:'09/11/2026',rating:5,type:"electric"

    },
    {
     
      prodname:"smartwatch",qty:10,price:4000,discount:7,expirydate:'19/03/2024',rating:4,type:"electronic"

    },
    {
     
      prodname:"copier",qty:10,price:50000,discount:4,expirydate:'21/02/2029',rating:5,type:"electronic"

    },
    {
     
      prodname:"iron",qty:4,price:7000,discount:7,expirydate:'12/05/2029',rating:5,type:"electronic"

    },
    
    {
     
      prodname:"lights",qty:10,price:100,discount:5,expirydate:'02/02/2026',rating:2,type:"grocery"

    },
    {
     
      prodname:"books",qty:100,price:100000,discount:10,expirydate:'14/03/2026',rating:5,type:"grocery"

    },
    {
     
      prodname:"shirt",qty:10,price:2000,discount:25,expirydate:'05/02/2026',rating:5,type:"grocery"

    },
    {
     
      prodname:"Watermelon",qty:1,price:30,discount:2,expirydate:'09/01/2026',rating:5,type:"grocery"

    },
    {
     
      prodname:"boost",qty:10,price:5000,discount:5,expirydate:'03/05/2026',rating:5,type:"grocery"

    },
    {
     
      prodname:"maggi",qty:10,price:50,discount:10,expirydate:'07/03/2029',rating:5,type:"grocery"

    },
    {
     
      prodname:"oil",qty:5,price:200,discount:10,expirydate:'03/06/2025',rating:4,type:"grocery"

    },
    {
     
      prodname:"chips",qty:100,price:60,discount:3,expirydate:'04/02/2026',rating:5,type:"grocery"

    },
    {
     
      prodname:"bucket",qty:6,price:100,discount:5,expirydate:'02/03/2023',rating:3,type:"grocery"

    },
    {
     
      prodname:"potato",qty:10,price:50,discount:10,expirydate:'05/05/2024',rating:4,type:"grocery"

    },
    {
     
      prodname:"tomato",qty:5,price:80,discount:10,expirydate:'02/04/2024',rating:4,type:"grocery"

    },
    {
     
      prodname:"speaker",qty:10,price:80,discount:10,expirydate:'02/04/2024',rating:2,type:"electric"

    },
    {
     
      prodname:"plug box",qty:10,price:90,discount:4,expirydate:'02/04/2025',rating:5,type:"electronic"

    }

  ]
}

trackByCode(p:any,index:number):number
{
return p.code;
}

getAllCount():number
{
  return this.products.length;
}

getElectricCount():number
{
  return this.products.filter(i=>(
    i.type=="electric")
  ).length;
}

getElectronicCount():number
{
  return this.products.filter(i=>(
    i.type=="electronic")
  ).length;
}

getGroceryCount():number
{
  return this.products.filter(i=>(
    i.type=="grocery")
  ).length;
}

onRadioChange2(selectedValue:string):void
{
  this.selectedValue=selectedValue;
}
}

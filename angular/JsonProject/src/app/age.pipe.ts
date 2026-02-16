import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value: any): number {
    
    let currentYear:any=new Date().getFullYear(); //Current Year ==> 2024

    let dobYear:any=new Date(value).getFullYear(); ///DOB YEAR ==> 1990
    
    return currentYear-dobYear;


  }

}

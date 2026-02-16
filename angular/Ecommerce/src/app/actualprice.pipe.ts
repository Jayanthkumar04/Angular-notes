import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actualprice',
  standalone: true
})
export class ActualpricePipe implements PipeTransform {

  transform(value: any,discount:number): number {
 
    return value-(value*(discount/100));
 
  }

}

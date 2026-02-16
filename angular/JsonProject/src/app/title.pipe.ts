import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true
})
export class TitlePipe implements PipeTransform {

  transform(name:any,gender:string): string {
    
    if(gender.toLowerCase()=="male"){
      return "Mr. "+name;
    }
    else{
      return "Ms."+name;
    }

  }

}

import { Directive, HostBinding, Input,OnChanges } from '@angular/core';

enum CardType{

  VISA="visa",
  MASTERCARD="mastercard",
  AMERICANEXPRESS="american-express",
  UNKNOWN="unknown"
}
@Directive({
  selector: '[appCclogo]',
  standalone: true
})
export class CclogoDirective {

  @HostBinding('src')
  imageSource:string=""; //binding src tag with directives
  constructor() { }

  @Input()
  cardNumber:string=""; // cardnumber is an input cmng from any of the component

  ngOnChanges()
  {
    this.imageSource='/assets/card-types/'+this.getCardTypeFromNumber()+'.png';
  }
  getCardTypeFromNumber():CardType{
if(this.cardNumber){
    if(this.cardNumber.startsWith('42')){
      return CardType.VISA; 
    }
    else if(this.cardNumber.startsWith('35')){
     return CardType.MASTERCARD; 
    }
    else if(this.cardNumber.startsWith('22')){
      return CardType.AMERICANEXPRESS;
    }
    else{
      return CardType.UNKNOWN;
    }

  }
  else{
    return CardType.UNKNOWN;  
  }
  }

}

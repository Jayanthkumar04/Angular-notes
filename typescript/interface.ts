interface ex1{

techOne:string;
techTwo:string;
experience:number;

}

class ex2 implements ex1{

  public techOne:string="react";
  public techTwo:string="Angular";
  public experience:number=2;
   
}

let obj1:ex1={
  techOne:"java",
  techTwo:"pyton",
  experience:3
}

console.log(obj1);

console.log(new ex2());
function display(name:string,salary:number,age?:number)
{
  console.log("name is ==> ",name);
  
  console.log("salary is ==>",salary);

  if(age != undefined){
  console.log("age is ==>",age);
  }

}

display("jayanth",600000,23);

display("yashwanth",500000);
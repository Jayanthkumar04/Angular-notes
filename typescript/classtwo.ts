class classtwo{
    constructor(
        public arg1:string,public arg2:string,public arg3:string)
    {}
    //no need to initialize they will automatically get initialized
}

let obj1:classtwo=new classtwo("Angular","SpringBoot","Oracle");
console.log('Front End ==> ',obj1.arg1, '   Back End  ==> ', obj1.arg2,  ' Database ==> ',obj1.arg3);


let obj2:classtwo=new classtwo("React","DotnetWebAPI","SQLServer");
console.log('Front End ==> ',obj2.arg1, '   Back End  ==> ', obj2.arg2,  ' Database ==> ',obj2.arg3);

/*

Output


Front End ==>  Angular    Back End  ==>  SpringBoot  Database ==>  Oracle
Front End ==>  React    Back End  ==>  DotnetWebAPI  Database ==>  SQLServer


*/

class Prac
{

    constructor(public one:String,public two:String)
    {}

}

//main()

var obj3:Prac = new Prac("spring boot","jquery");

console.log(obj3.one);

console.log(obj3.two);
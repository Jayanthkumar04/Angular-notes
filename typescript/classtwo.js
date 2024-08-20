var classtwo = /** @class */ (function () {
    function classtwo(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return classtwo;
}());
var obj1 = new classtwo("Angular", "SpringBoot", "Oracle");
console.log('Front End ==> ', obj1.arg1, '   Back End  ==> ', obj1.arg2, ' Database ==> ', obj1.arg3);
var obj2 = new classtwo("React", "DotnetWebAPI", "SQLServer");
console.log('Front End ==> ', obj2.arg1, '   Back End  ==> ', obj2.arg2, ' Database ==> ', obj2.arg3);
/*

Output


Front End ==>  Angular    Back End  ==>  SpringBoot  Database ==>  Oracle
Front End ==>  React    Back End  ==>  DotnetWebAPI  Database ==>  SQLServer


*/
var Prac = /** @class */ (function () {
    function Prac(one, two) {
        this.one = one;
        this.two = two;
    }
    return Prac;
}());
//main()
var obj3 = new Prac("spring boot", "jquery");
console.log(obj3.one);
console.log(obj3.two);

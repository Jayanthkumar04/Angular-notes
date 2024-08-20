/*

Inheritance ==> Reusability 

Parent Class and Child Classes


extends is the keyword used for inheritance

Multilevel Inheritance is possible in typescript


Through Classes we cant achieve Mutiple inheritance
We can achieve achieve through interfaces


*/


class class_one{
    public fun_one():string{
        return "Class1 ==> Function One"
    }
}


class class_two extends class_one{

    public fun_two():string{
        return "Class2 ==> Function Two"
    }

}


let obj:class_two=new class_two();

console.log(obj.fun_one());

console.log(obj.fun_two());


/*Output

Class1 ==> Function One
Class2 ==> Function Two

*/


class A
{
    public print():string
    {
       return "printing";
    }
}

class B extends A
{
    public noPrint():string
    {
        return "not printing";
    }
}

//main()

var obj5:B = new B();

console.log(obj5.print());
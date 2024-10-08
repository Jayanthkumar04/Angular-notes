/*

Class ==> Collection of Data Members and Member functions

Class ==> Encapsulation ==> Binding of data with Data Member and exposing this data
to outside world through member functions


We can create a class using "class" keyword

Constructor ==> Its a member function can be invoked automatically when object is 
initialized


new is the keyword to create an object to the class

IN class datamemebers no need to use var keyword as object is included already;

*/

class class1{

    private uiTech:string;
    private backEnd:string;
    private db:string;


    constructor(){
        this.uiTech="Angular";
        this.backEnd="Spring Boot";
        this.db="Oracle";
    }


    public getUiTech():string{
        return this.uiTech;
    }

    public getBackEnd():string{
        return this.backEnd;
    }

    public getDB():string{
        return this.db;
    }


}

var obj:class1=new class1(); //Creating object for Class Class1

console.log('UI Technology ===> ' , obj.getUiTech());
console.log('BackEnd Technology ===> ' , obj.getBackEnd());
console.log('Database Technology ===> ' , obj.getDB());


class A
{

    private breakfast:string;
    private lunch:string;
    private dinner:string;

    constructor(breakfast:string, lunch:string, dinner:string)
    {
        this.breakfast = breakfast;
        this.lunch     =  lunch;
        this.dinner    = dinner;
        console.log(breakfast,"  ",lunch,"  ",dinner);
    }

    public getBreakfast()
    {
        return this.breakfast;
    }

    public getDinner()
    {
        return this.dinner;
    }

}

var obj1:A = new A("upma","bendi","sambhar");

console.log(obj1.getDinner());
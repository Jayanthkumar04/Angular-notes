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
var class1 = /** @class */ (function () {
    function class1() {
        this.uiTech = "Angular";
        this.backEnd = "Spring Boot";
        this.db = "Oracle";
    }
    class1.prototype.getUiTech = function () {
        return this.uiTech;
    };
    class1.prototype.getBackEnd = function () {
        return this.backEnd;
    };
    class1.prototype.getDB = function () {
        return this.db;
    };
    return class1;
}());
var obj = new class1(); //Creating object for Class Class1
console.log('UI Technology ===> ', obj.getUiTech());
console.log('BackEnd Technology ===> ', obj.getBackEnd());
console.log('Database Technology ===> ', obj.getDB());
var A = /** @class */ (function () {
    function A(breakfast, lunch, dinner) {
        this.breakfast = breakfast;
        this.lunch = lunch;
        this.dinner = dinner;
        console.log(breakfast, "  ", lunch, "  ", dinner);
    }
    A.prototype.getBreakfast = function () {
        return this.breakfast;
    };
    A.prototype.getDinner = function () {
        return this.dinner;
    };
    return A;
}());
var obj1 = new A("upma", "bendi", "sambhar");
console.log(obj1.getDinner());

/*

Inheritance ==> Reusability

Parent Class and Child Classes


extends is the keyword used for inheritance

Multilevel Inheritance is possible in typescript


Through Classes we cant achieve Mutiple inheritance
We can achieve achieve through interfaces


*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return "Class1 ==> Function One";
    };
    return class_one;
}());
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_two = function () {
        return "Class2 ==> Function Two";
    };
    return class_two;
}(class_one));
var obj = new class_two();
console.log(obj.fun_one());
console.log(obj.fun_two());
/*Output

Class1 ==> Function One
Class2 ==> Function Two

*/
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.print = function () {
        return "printing";
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.noPrint = function () {
        return "not printing";
    };
    return B;
}(A));
//main()
var obj5 = new B();
console.log(obj5.print());

/*

Array ==> A variable can store more than one  value

Number Array ==> Can store more than one number


String Array ==> Can Store more than one string



Syntax:

var <array_name>:number[]=[<value1>,<value2>,<value3>];

var <array_name>:Array<number>=[<value1>,<value2>,<value3>];

*/
var num_arr = [10, 20, 30, 40, 50];
num_arr.forEach(function (element, index) {
    console.log('Index is ==> ', index, 'Element is ===>', element);
});
var num2 = [22, 33, 44, 55];
num2.forEach(function (element) {
    console.log(element);
});
/*
Output:

Index is ==>  0 Element is ===> 10
Index is ==>  1 Element is ===> 20
Index is ==>  2 Element is ===> 30
Index is ==>  3 Element is ===> 40
Index is ==>  4 Element is ===> 50


*/ 

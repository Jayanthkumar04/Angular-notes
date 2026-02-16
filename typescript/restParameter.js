function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++)
        sum = sum + nums[i];
    console.log("sum is ==>", sum);
}
addNumbers(1, 2, 3);
addNumbers(1, 2, 3, 4, 5, 10);

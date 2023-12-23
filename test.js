function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
var result1 = add(5, "Ashutosh", true);
var result2 = add("Hello", 5, false);
var addTwo = function (num1, num2) {
    return num1 + num2;
};
console.log(addTwo(5, 10));

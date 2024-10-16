function greet(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(",") + "!";
}
console.log(greet("hello", "shreya", "tanaya"));
console.log(greet("hello"));
function sum() {
    var v = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        v[_i] = arguments[_i];
    }
    var sum = 0;
    v.forEach(function (element) {
        sum = sum + element;
    });
    return sum;
    // const total = numbers.reduce((accumulator, current) => accumulator + current, 0);
    // return `${greeting} ${total}`;
}
// Call the function with a greeting and several numbers
console.log(sum(2, 3, 5, 10));

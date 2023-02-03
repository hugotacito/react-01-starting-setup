var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives: numbers (ints and floats), strings, booleans
var age = 10;
age = 10.2;
var userName = 'John';
userName = 'Evelyn';
var isMarried = true;
isMarried = false;
// Complex Types: arrays and objects
var hobbies = ['fishing', 'board-gaming'];
hobbies = ['cooking', 'sports'];
var person = { name: 'John', age: 37 };
var people = [{ name: 'John', age: 37 }, { name: 'Evelyn', age: 34 }];
var children = [{ name: 'Ava', age: 12 }];
// type inference and mixed types
var course = 'React - The Complete Guide';
course = 10.1;
// Functions & types
var add = function (a, b) {
    return a + b;
};
console.log(add(2, 5));
var logging = function (value) {
    console.log(value);
};
logging('test');
// Generics
var insertAtBegining = function (array, value) {
    return __spreadArray([value], array, true);
};
var demoArray = [1, 2, 3];
var updatedArray = insertAtBegining(demoArray, '0');
console.log(updatedArray);
var newInsertAtBegining = function (array, value) {
    return __spreadArray([value], array, true);
};
var newDemoArray = [1, 2, 3];
var newUpdatedArray = newInsertAtBegining(newDemoArray, 0);
console.log(newUpdatedArray);
var newStringArray = newInsertAtBegining(['b', 'c', 'd'], 'a');
console.log(newStringArray);

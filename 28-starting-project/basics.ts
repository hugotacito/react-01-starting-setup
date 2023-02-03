// Primitives: numbers (ints and floats), strings, booleans
let age: number = 10;
age = 10.2;

let userName: string = "John";
userName = "Evelyn";

let isMarried: boolean = true;
isMarried = false;

// Complex Types: arrays and objects

let hobbies: string[] = ["fishing", "board-gaming"];
hobbies = ["cooking", "sports"];

let person: { name: string; age: number } = { name: "John", age: 37 };

let people: { name: string; age: number }[] = [
  { name: "John", age: 37 },
  { name: "Evelyn", age: 34 },
];

type Person = { name: string; age: number };

let children: Person[] = [{ name: "Ava", age: 12 }];

// type inference and mixed types
let course: string | number = "React - The Complete Guide";

course = 10.1;

// Functions & types
const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(2, 5));

const logging = (value: any) => {
  console.log(value);
};
logging("test");

// Generics

const insertAtBegining = (array: any[], value: any) => {
  return [value, ...array];
};

const demoArray = [1, 2, 3];

const updatedArray = insertAtBegining(demoArray, "0");
console.log(updatedArray);

const newInsertAtBegining = <T>(array: T[], value: T) => {
  return [value, ...array];
};

const newDemoArray = [1, 2, 3];

const newUpdatedArray = newInsertAtBegining(newDemoArray, 0);
console.log(newUpdatedArray);

const newStringArray = newInsertAtBegining(["b", "c", "d"], "a");
console.log(newStringArray);

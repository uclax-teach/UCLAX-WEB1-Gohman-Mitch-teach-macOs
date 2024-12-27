console.log("JavaScript Basics");

//  single line comment

/*
    Multiline comment
    ignored by the JS parser
    for notes and organizing
    enable and disable code
*/

// variables  - assign or keep track of a value
const myVar = "some value";
console.log(myVar);

// Data: Strings
const str1 = "I went to";
const str2 = ' the "movies" yesterday';
console.log(str1 + str2);

// Data: Numbers
const num1 = 234;
const num2 = 567.0212;
console.log(num1 + num2);

// Data: Functions
const func1 = (arg1, arg2) => {
    console.log("My func executed");
    console.log(arg1 * arg2);
};

func1(10, 100);
func1(20, 200);
func1(30, 300);
func1(40, 400);

// Data: Booleans
const bool1 = false;
const bool2 = true;
const bool3 = 1 + 1 === 2;

console.log(bool1);
console.log(bool2);
console.log(bool3);

if (bool3) {
    console.log("Math was correct");
}

// Data: Objects
const obj1 = { name: "Mitch Gohman", email: "meatch@me.com" };
console.log(obj1);
console.log(obj1.email);

// Data: Arrays
const arr1 = ["Apples", "Oranges", "Grapes"];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);

console.log("Null and Undefined");

let myVar = "should not be changed";
myVar = "Something new";
console.log(myVar);

let var2;

if (var2 === undefined) {
    console.log("You are undefined");
}

console.log(var2);

var2 = "Some data type";
console.log(var2);

var2 = null;

console.log(var2);

if (var2 === null) {
    console.log("You are NUll");
}

if (!var2) {
    console.log("You could be undefined or null");
}

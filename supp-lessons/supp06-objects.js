console.log("Objects");

let myObj = {
    "My String": "Red",
    num: 8712,
    arr: [10, 23, 45],
    fn: () => {
        console.log("This is a function assigned to an object.");
    },
};

console.log(myObj.num);
console.log(myObj["My String"]);

myObj.fn();

// Everything is an object

let myArr = ["up", "down", 23];
console.log(myArr);
console.log(myArr.length);

myArr.myArr = "Say Who?";

console.log(myArr);
console.log(myArr.myArr);

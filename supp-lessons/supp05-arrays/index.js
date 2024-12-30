console.log("Arrays");

import { staffData } from "./staffData.js";

const myNum1 = 1234;
let myArr = [12, "some string", `template strings`, myNum1];

console.log(myArr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);

myArr.push("Some new value after declaration.");

console.log(myArr);

const staffNames = staffData.map((member, idx) => {
    console.log(member.src, idx);
    return member.name;
});

console.log(staffNames);

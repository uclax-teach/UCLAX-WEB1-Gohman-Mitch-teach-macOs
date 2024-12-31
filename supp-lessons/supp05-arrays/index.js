console.log("Arrays");

import { staffData } from "./staffData.js";

const myObj = { num: 98162 };
const myArr = [12, "some string", `template strings`, myObj];
console.log(myArr);

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);

myArr.push("Something new");
console.log(myArr);

myArr.forEach((timbuktu) => {
    console.log(timbuktu);
});

// Staff
const names = staffData.map((member) => {
    return member.name;
});

console.log(names);

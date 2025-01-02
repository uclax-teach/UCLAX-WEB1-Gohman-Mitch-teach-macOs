console.log("Functions");

// Fat Arrow
const myFunc1 = () => {
    console.log("I am a fat arrow function");
};
myFunc1();

// named function
function myNamedFunction() {
    console.log("My Named Function");
}
myNamedFunction();

// anonymous
const myAnon = function () {
    console.log("My Anonymous Function");
};
myAnon();

// Destructuring
const person1 = {
    name: "Mitch Gohman",
    email: "meatch@me.com",
    color: ["red", "green", "blue"],
};
const person2 = {
    name: "Christina Gohman",
    email: "xtina@me.com",
    color: ["cyan", "magenta", "yellow"],
};

const readPerson = ({ name, email }) => {
    console.log(`Hey ${name}, your email is ${email}`);
};

readPerson(person1);
readPerson(person2);

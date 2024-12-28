console.log("Boolean");

console.log(true);
console.log(false);

const temperature = 119;

if (temperature < 50) {
    console.log("Brrrrr. It's cold outside.");
} else if (temperature > 90) {
    console.log("Ouch. getting hot.");
} else {
    console.log("Nice. Feels good.");
}

const myArr = ["apples", "oranges"];

if (myArr.length === 1) {
    console.log("You have single item in your array");
} else if (myArr.length >= 2) {
    console.log("You have more than one item in your array");
} else {
    console.log("You have no items in your array");
}

const response =
    myArr.length > 0
        ? "You have items in your array"
        : "You have no items in your array";

console.log(response);

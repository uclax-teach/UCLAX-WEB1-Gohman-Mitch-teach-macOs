// standard exports
export const palindrome = (str) => {
    let newWord = str.split("");
    newWord = newWord.reverse();
    newWord = newWord.join("");
    console.log(newWord);
};

export const favColor = "Blue, no yellllllooooooooowwwwwww!";

// default exports
const theUltimateAnswer = 42;
export default theUltimateAnswer;

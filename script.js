const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
let text = "";
const regex = /[^a-z0-9]/g;

button.addEventListener("click", () => {
    text = input.value.toLowerCase().replace(regex, "");
    if (text === "") alert("Please input a value");
    checkPalidrome(text);
}); 

const checkPalidrome = (str) => {
    let newWord = "";
    str.split("").forEach((letter) => {
        newWord = letter + newWord;
        console.log("new word: " + newWord + " string: " + str);
    })
    if (newWord === str) {
        console.log('palindrome');
    } else {
        console.log('not palindrome');
    }
}

// "_ is a palindrome"
//"_ is not a palindrome" 
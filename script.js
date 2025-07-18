const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

let text = "";
const regex = /[^a-z0-9]/g;

button.addEventListener("click", () => {
    text = input.value;
    const newText = text.toLowerCase().replace(regex, "");
    if (text === "") alert("Please input a value");
    checkPalidrome(newText);
}); 

const checkPalidrome = (str) => {
    let newWord = "";
    str.split("").forEach((letter) => {
        newWord = letter + newWord;
        console.log("new word: " + newWord + " string: " + str);
    })
    if (newWord === str) {
        result.textContent = `${text} is a palindrome`;

    } else {
        result.textContent = `${text} is not a palindrome`;

    }
}

//-----------------------------------------------------------------------
const romanInput = document.getElementById("number");
const romanButton = document.getElementById("convert-btn");
const romanResult = document.getElementById("output");
const romanNumeralKey = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1, "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

romanButton.addEventListener("click", () => {
    let number = Number(romanInput.value);
    let romanNumeral = "";
    if (!number) {
        romanResult.textContent = "Please enter a valid number.";
    } else if (number < 0) {
        romanResult.textContent =  "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        romanResult.textContent = "Please enter a number less than or equal to 3999";
    } else {
        for (let i = 0; i < romanNumeralKey.length/2; i++) {
            while (number - romanNumeralKey[i] >= 0) {
                number -= romanNumeralKey[i];
                romanNumeral += romanNumeralKey[romanNumeralKey.length/2 + i];
            }
        }
        romanResult.textContent = romanNumeral;
    }
});

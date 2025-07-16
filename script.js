const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
let text = "";
const regex = /[^a-z0-9]/g;

button.addEventListener("click", () => {
    text = input.value.toLowerCase().replace(regex, "");
    if (text === "") alert("Please input a value");
    console.log(text); 
}); 
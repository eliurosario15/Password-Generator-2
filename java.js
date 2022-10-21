// Assignment code here

//These are the arrays with the character options//

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "&", "*", "=", "+"];
var upperCase = lowerCase.map(function(x){
    return x.toUpperCase();
})

let userSelection = [];

function generatePassword() {

var userInput = window.prompt("How long do you want your password to be?")
var lenghtInput = parseInt(userInput)

if (isNaN(lenghtInput)) {
    window.alert("Not a number")
    return
}

if (lenghtInput < 8 || lenghtInput >128) {
    window.alert("Password must be between 8 and 128 characters")
    return
}


if (confirm("Do you want the password to include lower case letters?"))
userSelection.push(...lowerCase);
if (confirm("Do you want the password to include upper case letters?"))
userSelection.push(...upperCase);
if (confirm("Do you want the password to include numbers?"))
userSelection.push(...numbers);
if (confirm("Do you want the password to include symbols?"))
userSelection.push(...symbols);

if (userSelection == 0) {
    window.alert("You must select a crietria")
}



}










  
    




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
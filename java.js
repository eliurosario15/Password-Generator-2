// Assignment code here

//These are my arrays//

let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ["!", "@", "#", "$", "%", "&", "*", "=", "+"];
let upperCase = lowerCase.map(function(x){
    return x.toLocaleUpperCase();
})



//Windows prompt//

function generatePassword () {

    let passwordInput = window.prompt("How long do you want your password to be?")
    


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
// Assignment code here

//These are the arrays with the character options//

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "&", "*", "=", "+"];
var upperCase = lowerCase.map(function(x){
    return x.toUpperCase();
})

let userSelection = [];

if (confirm("Do you want the password to include lower case letters?"))
userSelection.push(...lowerCase);
if (confirm("Do you want the password to include upper case letters?"))
userSelection.push(...upperCase);
if (confirm("Do you want the password to include numbers?"))
userSelection.push(...numbers);
if (confirm("Do you want the password to include symbols?"))
userSelection.push(...symbols);

console.log(userSelection);










  
    




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
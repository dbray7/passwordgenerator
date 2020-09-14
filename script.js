// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharactersList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var password;
//generate password based on criteria
function generatePassword() {
  var maxPasswordLength = prompt("Maximum password length:");
  var minPasswordLength = prompt("Minumum password length:");
  var specialCharacters = confirm("Do you want to include special characters");
  var uppercase = confirm("Do you want to include uppercase letters?");
  var lowercase = confirm("Do you want to include lowercase letters?");
  var randomCharacter = Math.floor(Math.random() * specialCharacters.length);
  var randomUpperLetter = Math.floor(Math.random() * alphabet.length).toUpperCase();
  var randomLowerLetter = Math.floor(Math.random() * alphabet.length).toLowerCase();
  var randomNumber = Math.floor(Math.random() * number.length);
  if (specialCharacters) {

  } else {

  }
  if (uppercase) {

  } else {

  }
  if (lowercase) {

  } else {

  }
}
//where prompts and validations go

//must return a password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

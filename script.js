// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharactersList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", " >", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//generate password based on criteria

function passwordLengthValidation() {
  var passwordLength = parseInt(prompt("How many characters do you want your password to be? Must be between 8 and 128"));
  if (!passwordLength) {
    alert("Enter a number");
    passwordLengthValidation();
  } else if (passwordLength < 8) {
    alert("Enter a number greater than 8");
    passwordLengthValidation();
  }
  else if (passwordLength > 128) {
    alert("Enter a number less than 128");
    passwordLengthValidation();
  }
  return passwordLength;
}
function generatePassword() {
  var password = [];
  var passwordLength = passwordLengthValidation();
  var specialCharacters = confirm("Do you want to include special characters?");
  var uppercase = confirm("Do you want to include uppercase letters?");
  var lowercase = confirm("Do you want to include lowercase letters?");
  var number = confirm("Do you want to include a number?");
  var randomCharacter = specialCharactersList[Math.floor(Math.random() * specialCharactersList.length)];
  var randomUpperLetter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
  var randomLowerLetter = alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase();
  var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  if (specialCharacters) {
    password.push(randomCharacter);
  }
  if (uppercase) {
    password.push(randomUpperLetter);
  }
  if (lowercase) {
    password.push(randomLowerLetter);
  }
  if (number) {
    password.push(randomNumber);
  }
  var remainingPassword = [];
  if (passwordLength > password.length) {
    passwordLength = passwordLength - password.length;
  }
  var remainingSection = [];
  if (lowercase) {
    remainingSection = remainingSection.concat(alphabet);
  }
  if (uppercase) {
    alphabet.forEach(element => {
      remainingSection.push(element.toUpperCase());
    });
  }
  if (number) {
    remainingSection = remainingSection.concat(numbers);
  }
  if (specialCharacters) {
    remainingSection = remainingSection.concat(specialCharactersList);
  }
  for (let index = 0; index < passwordLength; index++) {
    remainingPassword.push(remainingSection[index]);
  }
  var concatPassword = password.concat(remainingPassword).join("");
  if (concatPassword === "") {
    alert("Cannot create password, please select at least one criteria")
  } else {
    console.log("length" + password.concat(remainingPassword).length);
    return concatPassword;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

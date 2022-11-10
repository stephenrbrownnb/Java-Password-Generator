// Required Variables

var generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let symbols = "~!@#$%^&*(?|".split("");
let numbers = "0123456789".split("");
let possibleCharacters=[];
let password = [];
var generateBtn = document.querySelector("#generate");

// Password Criteria 
function writePassword() {
  let passwordLength = prompt("How long should your password be? (Please choose a number between 8 and 128");
   if (passwordLength < 8) {alert("You must have at least 8 characters");generatePassword();

   }
   else if (passwordLength > 128) {alert("You cannot have more than 128 characters.");generatePassword();

  }
  let cLower = confirm("Should your password contain Lower case letters? (Ok for Yes, Cancel for No)");
    if (cLower) {
  possibleCharacters = possibleCharacters.concat(lowerCase);
}
  let cUpper = confirm("Should your password contain Upper case Letters? (Ok for Yes, Cancel for No)");
    if (cUpper) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  } 
  
  let cNumber = confirm("Should your password contain Numbers? (Ok for Yes, Cancel for No.");
    if (cNumber) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  
  let cSymbol = confirm("Should your password contain Symbols? (Ok for Yes, Cancel for No.");
    if (cSymbol) {
    possibleCharacters = possibleCharacters.concat(symbols);
   }

   else if (possibleCharacters === ""){alert("You must choose at least one criteria for password");}

// Password Generator
for (let i = 0; i < passwordLength; i++) {
  let randomCharacter = Math.floor((Math.random() * possibleCharacters.length));
  password += (possibleCharacters[randomCharacter]);

}
//Password reset 
possibleCharacters = [];
generatePassword();
}

 //Display Password
 function generatePassword(){ 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 //Password Test
 // console.log(password);
 }
 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

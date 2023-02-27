// Assignment Code
var generateBtn = document.querySelector("#generate");
var includeNumbers = prompt;



// Write password to the #password input

function writePassword() {

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = "";

  //Char length 
  var lengthCorrect = true;
  var passwordLength = 8;

  //Char types
  var charTypes = false;
  
  var uppercase = false;
  var lowercase = false;
  var numeric = false;
  var special = false;

  var chars = "";
  var allChars = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890",  "!@#$%^&*"];

  // var charString = "";
  // var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  // var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
  
  
  //Char length loop
  while (lengthCorrect === true) {
    var passwordLength = prompt("How many characters would you like? (min 8, max 128)", passwordLength);
    console.log(passwordLength);
    if (passwordLength === null) {
      alert("Generate tool terminated.");
      return;
    }


    if (passwordLength <= 7 || passwordLength >= 129) {
      alert("Password length needs to be more than 8 characters, or less than 128 characters. Please try again.");
      lengthCorrect = true;
    } else if (passwordLength >= 8 && passwordLength <= 128) {
      alert("Password length set to: " + passwordLength);
      lengthCorrect = false;
    } else {
      alert("Please enter a valid number.");
    }

  }


  // else if (passwordLength === null) {
  //   alert("Generate tool terminated.");
  //   return;
  // }  


  //Char Types loop
  while (charTypes === false) {

    var charLoop = true;

    while (charLoop === true) {
      var promptYN = prompt("Would you like to include uppercase letters? Y/N");

      if (promptYN === "Y") {
        alert("Uppercase letters will be included.");
        uppercase = true;
        charLoop = false;
      } else if (promptYN === "N") {
        alert("Uppercase letters will not be included.");
        uppercase = false;
        charLoop = false;
      } else if (promptYN === null) {
        alert("Generate tool terminated.");
        return;
      } else {
        alert("Please enter either Y or N.")
        charLoop = true;
      }
    }

    charLoop = true;

    while (charLoop === true) {
      promptYN = prompt("Would you like to include lowercase letters? Y/N");
      
      console.log(promptYN);
      if (promptYN === "Y") {
        alert("Lowercase letters will be included.");
        lowercase = true;
        charLoop = false;
      } else if (promptYN = "N") {
        alert("Lowercase letters will not be included.");
        lowercase = false;
        charLoop = false;
      } else if (promptYN === null) {
        alert("Generate tool terminated.");
        return;
      } else {
        alert("Please enter either Y or N.")
        charLoop = true;
      }
    }

    charLoop = true;

    while (charLoop === true) {
      promptYN = prompt("Would you like to include numeric characters? Y/N");

      if (promptYN === "Y") {
        alert("Numeric characters will be included.");
        numeric = true;
        charLoop = false;
      } else if (promptYN = "N") {
        alert("Numeric characters will not be included.");
        numeric = false;
        charLoop = false;
      } else if (promptYN === null) {
        alert("Generate tool terminated.");
        return;
      } else {
        alert("Please enter either Y or N.")
        charLoop = true;
      }
    }

    charLoop = true;

    while (charLoop === true) {
      promptYN = prompt("Would you like to include special characters? Y/N");

      if (promptYN === "Y") {
        alert("Special characters will be included.");
        special = true;
        charLoop = false;
      } else if (promptYN = "N") {
        alert("Special characters will not be included.");
        special = false;
        charLoop = false;
      } else if (promptYN === null) {
        alert("Generate tool terminated.");
        return;
      } else {
        alert("Please enter either Y or N.")
        charLoop = true;
      }
    } 

    if (uppercase === true || lowercase === true || numeric === true || special === true) {
      alert("The character types have been selected, thank you.\nGenerating password now:")
      charTypes = true;
    } else {
      alert("No character types were selected. Please choose at least one type.")
      charTypes = false;
    }
  }



  //Password generation 

  if (lowercase === true) {
    chars = chars + allChars[0];
  }

  if (uppercase === true) {
    chars = chars + allChars[1];
  }

  if (numeric === true) {
    chars = chars + allChars[2];
  }

  if (special === true) {
    chars = chars + allChars[3];
  }

  console.log(chars);

  // if (uppercase === false && lowercase === true && numeric === false && special === false) {
  //   charString = "abcdefghijklmnopqrstuvwxyz";
  // } else if (uppercase === true && lowercase === true && numeric === false && special === false) {
  //   charString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // } else if (uppercase === true && lowercase === true && numeric === true && special === false) {
  //   charString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  // } else if (uppercase === true && lowercase === true && numeric === false && special === true) {
  //   charString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
  // } else if (uppercase === false && lowercase === true && numeric === true && special === false) {
  //   charString = "abcdefghijklmnopqrstuvwxyz1234567890";
  // } else if (uppercase === false && lowercase === true && numeric === false && special === true) {
  //   charString = "abcdefghijklmnopqrstuvwxyz!@#$%^&*";
  // } else if (uppercase === false && lowercase === true && numeric === true && special === true) {
  //   charString = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
  // } else if (uppercase === true && lowercase === false && numeric === false && special === false) {
  //   charString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // } else if (uppercase === true && lowercase === false && numeric === true && special === false) {
  //   charString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  // } else if (uppercase === true && lowercase === false && numeric === true && special === true) {
  //   charString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
  // } else if (uppercase === true && lowercase === false && numeric === false && special === true) {
  //   charString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
  // } else if (uppercase === false && lowercase === false && numeric === true && special === false) {
  //   charString = "1234567890";
  // } else if (uppercase === false && lowercase === false && numeric === true && special === true) {
  //   charString = "1234567890!@#$%^&*";
  // } else if (uppercase === false && lowercase === false && numeric === false && special === true) {
  //   charString = "!@#$%^&*";
  // } else if (uppercase === true && lowercase === true && numeric === true && special === true) {
  //   charString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
  // }
  

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  

  document.getElementById("password").value = password;

  passwordText = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


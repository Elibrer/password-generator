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

  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
  
  
  //Char length loop
  while (lengthCorrect === true) {
    var passwordLength = prompt("How many characters would you like? (min 8, max 128)", passwordLength);
    console.log("Password Length: " + passwordLength);
    


    if (passwordLength <= 7 || passwordLength >= 129) {
      alert("Password length needs to be more than 8 characters, or less than 128 characters. Please try again.");
      lengthCorrect = true;
    } else if (passwordLength >= 8 && passwordLength <= 128) {
      alert("Password length set to: " + passwordLength);
      lengthCorrect = false;
    } else if (passwordLength === null) {
      alert("Generate tool terminated.");
      return;
    } else {
      alert("Please enter a valid number.");
    }

  }

  //Char Types loop
  while (charTypes === false) {

    var charLoop = true;

    while (charLoop === true) {
      var promptYN = prompt("Would you like to include uppercase letters? Y/N");

     

      promptYN = promptYN.toUpperCase();

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
      var promptYN = prompt("Would you like to include lowercase letters? Y/N");

      promptYN = promptYN.toUpperCase();

      if (promptYN === "Y") {
        alert("Lowercase letters will be included.");
        lowercase = true;
        charLoop = false;
      } else if (promptYN === "N") {
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
      var promptYN = prompt("Would you like to include numeric characters? Y/N");

      promptYN = promptYN.toUpperCase();

      if (promptYN === "Y") {
        alert("Numeric characters will be included.");
        numeric = true;
        charLoop = false;
      } else if (promptYN === "N") {
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
      var promptYN = prompt("Would you like to include special characters? Y/N");

      promptYN = promptYN.toUpperCase();

      if (promptYN === "Y") {
        alert("Special characters will be included.");
        special = true;
        charLoop = false;
      } else if (promptYN === "N") {
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

  var allCharsOther = []; 
  var guaranteedCharsNumber = 0;

  // Password generation 

  if (lowercase === true) {
    var randomLower = lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    console.log(randomLower);
    password += randomLower;
    guaranteedCharsNumber++;
    allCharsOther = allCharsOther.concat(lowercaseChars);
  }

  if (uppercase === true) {
    var randomUpper = uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    console.log(randomUpper);
    password += randomUpper;
    guaranteedCharsNumber++;
    allCharsOther = allCharsOther.concat(uppercaseChars);  
  }

  if (numeric === true) {
    var randomNumeric = numericChars[Math.floor(Math.random() * numericChars.length)];
    console.log(randomNumeric);
    password += randomNumeric;
    guaranteedCharsNumber++;
    allCharsOther = allCharsOther.concat(numericChars);
  }

  if (special === true) {
    var randomSpecial = specialChars[Math.floor(Math.random() * specialChars.length)];
    console.log(randomSpecial);
    password += randomSpecial;
    guaranteedCharsNumber++;
    allCharsOther = allCharsOther.concat(specialChars);
  }

  console.log("List of all chosen characters: " + allCharsOther);

  for (var i = 0; i < passwordLength - guaranteedCharsNumber; i++) {
    
    password += allCharsOther[(Math.floor(Math.random() * allCharsOther.length))];
  }

  document.getElementById("password").value = password;
  passwordText = password;
}

generateBtn.addEventListener("click", writePassword);

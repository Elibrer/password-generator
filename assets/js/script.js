// Assignment Code
var generateBtn = document.querySelector("#generate");

var includeNumbers = prompt;



// Write password to the #password input
function writePassword() {

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = "";

  //Char length 
  var lengthCorrect = false;
  var passwordLength = 8;

  //Char types
  var charTypes = false;
  var uppercase = false;
  var lowercase = false;
  var numeric = false;
  var special = false;

  // var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  // var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
  

  // var chars = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890",  "!@#$%^&*"];
  var chars = "";
  
  var charString = "";



  //Char length loop
  while (lengthCorrect === false) {
    var passwordLength = prompt("How many characters would you like? (min 8, max 128)", passwordLength);

    if (passwordLength <= 7 || passwordLength >= 129) {
      alert("Password length needs to be more than 8 characters, or less than 128 characters. Please try again.")
      lengthCorrect = false;
    } else {
      alert("Password length set to: " + passwordLength);
      lengthCorrect = true;
    }

  }





  //Char Types loop
  while (charTypes === false) {
    var uppercase = confirm("Would you like to include uppercase letters?");

    if (uppercase === true) {
      alert("Uppercase letters will be included.");
    }
    else {
      alert("Uppercase letters will not be included.");
    }

    var lowercase = confirm("Would you like to include lowercase letters?");

    if (lowercase === true) {
      alert("Lowercase letters will be included.");
    }
    else {
      alert("Lowercase letters will not be included.");
    }

    var numeric = confirm("Would you like to include numeric characters?");

    if (uppercase === true) {
      alert("Numeric characters will be included.");
    }
    else {
      alert("Numeric characters will not be included.");
    }

    var special = confirm("Would you like to include special characters?");

    if (special === true) {
      alert("Special characters will be included.");
    }
    else {
      alert("Special characters will not be included.");
    }

    if (uppercase === true || lowercase === true || numeric === true || special === true) {
      alert("The character types have been selected, thank you.")
      charTypes = true;
    } else {
      alert("No character types were selected. Please choose at least one type.")
      charTypes = false;
    }
  }



  //Password generation 

if (lowercase === true) {
  chars = chars + "abcdefghijklmnopqrstuvwxyz";
} else {
  chars = chars;
}

if (uppercase === true) {
  chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else {
  chars = chars;
}

if (numeric === true) {
  chars = chars + "1234567890";
} else {
  chars = chars;
}

if (special === true) {
  chars = chars + "!@#$%^&*";
} else {
  chars = chars;
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
    var randomNumber = Math.floor(Math.random() * charString.length - 1);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  
// for (var i = 0; i<= passwordLength; i++) {
//   var randomNumber = Math.floor(Math.random() * charString.length )
// }


  document.getElementById("password").value = password;

  passwordText = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


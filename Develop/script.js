// Assignment code here
// Arrays:
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "/", ">", "?", "<", "-", "=", "+", "~"];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Input Variables
var confirmLength;
var confirmSpecial;
var confirmNumber;
var confirmLowerAlpha;
var confirmUpperAlpha;

// Confirm length of password
function generatePassword() {
    var confirmLength = (window.prompt("How long would you like your password to be? (Between 8 and 128 characters)"))
    if (confirmLength <= 7 || confirmLength >= 129 || confirmLength === "") {
        window.alert("Please choose a number between 8 and 128!")
        generatePassword();
    }
    else {
        window.alert("Your password will be " + confirmLength + " characters long.");
        parameterConfirm();
    }

    function parameterConfirm() {
        confirmLowerAlpha = window.confirm("Would you like to include lowercase letters?");
        confirmUpperAlpha = window.confirm("Would you like to include capital letters?");
        confirmNumber = window.confirm("Would you like to include numbers?");
        confirmSpecial = window.confirm("Would you like to include special characters?");

        // if statement if they choose no parameters
        if (confirmLowerAlpha === false && confirmUpperAlpha === false && confirmNumber === false && confirmSpecial === false) {
            window.alert("You must select at least one parameter");
            parameterConfirm();
        }
        // else to move on through the function
        else {}
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
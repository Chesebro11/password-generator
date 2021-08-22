// Assignment code here
// variables:
var number = '1234567890';
var special = ['!@#$%^&*<>?/'];
var lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
var upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
    // nested another function inside of this one for the parameter selection
    function parameterConfirm() {
        confirmLowerAlpha = window.confirm("Would you like to include lowercase letters?");
        confirmUpperAlpha = window.confirm("Would you like to include capital letters?");
        confirmNumber = window.confirm("Would you like to include numbers?");
        confirmSpecial = window.confirm("Would you like to include special characters?");

        // if/else statement for determining which parameters were selected
        if (confirmLowerAlpha === false && confirmUpperAlpha === false && confirmNumber === false && confirmSpecial === false) {
            window.alert("You must select at least one parameter");
            parameterConfirm();
        }
        // else if for all options
        else if (confirmLowerAlpha && confirmUpperAlpha && confirmNumber && confirmSpecial) {
            parameters = lowerAlpha + upperAlpha + number + special
        }
        // else ifs for only 3 options
        else if (confirmLowerAlpha && confirmUpperAlpha && confirmNumber) {
            parameters = lowerAlpha + upperAlpha + number
        }
        else if (confirmLowerAlpha && confirmUpperAlpha && confirmSpecial) {
            parameters = lowerAlpha + upperAlpha + special
        }
        else if (confirmUpperAlpha && confirmNumber && confirmSpecial) {
            parameters = upperAlpha + number + special
        }
        else if (confirmSpecial && confirmNumber && confirmLowerAlpha) {
            parameters = special + number + lowerAlpha
        }
        // 2 options
        else if (confirmLowerAlpha && confirmUpperAlpha) {
            parameters = lowerAlpha + upperAlpha
        }
        else if (confirmLowerAlpha && confirmNumber) {
            parameters = lowerAlpha + number
        }
        else if (confirmLowerAlpha && confirmSpecial) {
            parameters = lowerAlpha + special
        }
        else if (confirmUpperAlpha && confirmNumber) {
            parameters = upperAlpha && number
        }
        else if (confirmUpperAlpha && confirmSpecial) {
            parameters = upperAlpha + special
        }
        else if (confirmNumber && confirmSpecial) {
            parameters = number + special
        }
        // only 1 selection
        else if (confirmLowerAlpha) {
            parameters = lowerAlpha
        }
        else if (confirmUpperAlpha) {
            parameters = upperAlpha
        }
        else if (confirmNumber) {
            parameters = number
        }
        else if (confirmSpecial) {
            parameters = special
        }
        console.log(parameters)
        console.log(confirmLength)
    };


    // creating empty password variable to store the generated password in
    var password = '';

    // this will select random values from the arrays selected
    for (var i = 0; i < confirmLength; i++) {
        password = password + parameters[Math.floor(Math.random() * parameters.length)];
    }
    return password
};





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
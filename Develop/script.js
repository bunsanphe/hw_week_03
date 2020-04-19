// Assignment Code
// var generateBtn = document.querySelector("#generate");


document.getElementById("generate").onclick = function () {
  start()
}

function start() {

var pwLength = 0;
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    specialChar = ["@", "$", "!", "-","&"],
    upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function pwLengthValidate(pwLength) {
    return (pwLength >= 8 && pwLength <= 128);
    }

    while (! pwLengthValidate(pwLength)) {
    pwLength = parseInt( prompt("Provide a password lenght between 8 an 128") );
    }
    console.log(pwLength);

    var options = {
        "lowerCaseOp": confirm("Would you like lowercase letter in your password?"),
        "upperCaseOp": confirm("Would you like uppercase letters in your password?"),
        "numericOp": confirm("Would you like numbers in your password?"),
        "specialCharOp": confirm("Would you like special characte letters in your password?")
    };

function genPW(options) {
    var password = "";
    var possibleChar = [],
        reqField = [];
    

    if(options.lowerCaseOp) {
        possibleChar = possibleChar.concat(lowerCase);
        reqField.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
    }

    if(options.upperCaseOp) {
        possibleChar = possibleChar.concat(upperCase);
        reqField.push(upperCase[Math.floor(Math.random() * upperCase.length)])
    }

    if(options.numericOp) {
        possibleChar = possibleChar.concat(numeric);
        reqField.push(numeric[Math.floor(Math.random() * numeric.length)])
    }

    if(options.specialCharOp) {
        possibleChar = possibleChar.concat(specialChar);
        reqField.push(specialChar[Math.floor(Math.random() * specialChar.length)])
    }
    console.log(possibleChar);

    for(var i = 0; i <= pwLength-1; i++) {
        if(reqField[i]) {
            password = password + reqField[i];
        }
        else {
            password = password + possibleChar[Math.floor(Math.random() * possibleChar.length)];
        }
    }
    return password;
}
// console.log(genPW(options));
 

// // Add event listener to generate button
// generateBtn.addEventListener("click", isPWLenghtCorrect);

// text box dsiplay area
document.getElementById("password").value = genPW(options);
}
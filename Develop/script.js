// Assignment Code
let generateBtn = document.querySelector("#generate");
let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); //# of characters =24
let lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(''); //# of characters =24
let numberCharacters = '0123456789'.split(''); //10 numbers
let specialCharacters = '!@#$%^&*()_+~<>?,./{}|'.split('');
let charRules = [8, 128, "false"] //min,max and did we validate for upper lower or number
// let CharKey = Math.floor(Math.random() * 23) + 1; // to pick random indexes from specific arrays
// let numKey = Math.floor(Math.random() * 9) + 1;
// let spcKey = Math.floor(Math.random() * 23) + 1;
let pwdTxt = [];
let choiceCharacters = [];

let pwdChoice = {
  charNum: 0,
  charUpper: false,
  charLower: false,
  charNumber: false,
  charSpecial: false,
}
function generatePassword() {
  // track user options
  let userChoice = window.prompt("Number of Characters in password?");

  if ((userChoice >= charRules[0]) && (userChoice <= charRules[1])) {
    pwdChoice.charNum = userChoice;
  } else {
    alert("Number must be between " + charRules[0] + " " + charRules[1]);
    return;
  }
  let userUpper = window.prompt("Uppercase Characters T-True?");
  userUpper = userUpper.toUpperCase()

  if (userUpper === "T") {
    pwdChoice.charUpper = true;
  } else {
    alert("Must be T for True or anything else will be False");
    pwdChoice.charUpper = false;
  }
 
  let userLower = window.prompt("Lowercase Characters T-True?");
  userLower = userLower.toUpperCase()

  if (userLower === "T") {
    pwdChoice.charLower = true;
  } else {
    pwdChoice.charLower = false;
  }

  let userNumber = window.prompt("Numbered Characters T-True?");
  userNumber = userNumber.toUpperCase()

  if (userNumber === "T") {
    pwdChoice.charNumber = true;
  } else {
    pwdChoice.charNumber = false;
  }

  let userSpecial = window.prompt("Special Characters T-True?");
  userSpecial = userSpecial.toUpperCase()

  if (userSpecial === "T") {
    pwdChoice.charSpecial = true;
  } else {
    pwdChoice.charSpecial = false;
  }

// Validate at least one is on
  if ((pwdChoice.charNumber = false) && (pwdChoice.charUpper = false) && (pwdChoice.charLower = false) && (pwdChoice.charSpecial = false)); {
    alert("Must have a least one True choice for upper, lower, number or special character. Choosing special characters.");
    pwdChoice.charSpecial = true;
    charRules[2] = true;
    } 
    
    upperKey = Math.floor((Math.random() * 23) + 1); // to pick random indexes from specific arrays
    lowerKey = Math.floor((Math.random() * 23) + 1); // to pick random indexes from specific arrays
    numKey = Math.floor((Math.random() * 9) + 1);
    spcKey = Math.floor((Math.random() * 23) + 1);

    if (pwdChoice.charUpper = true) {
      choiceCharacters = choiceCharacters.concat(uppercaseCharacters)
      pwdTxt = pwdTxt.concat(uppercaseCharacters[upperKey])

    } else if (
      pwdChoice.charLower = true) {
      choiceCharacters = choiceCharacters.concat(lowercaseCharacters)
      pwdTxt = pwdTxt.concat(lowercaseCharacters[lowerKey])

    } else if (
      pwdChoice.charNumber = true) {
      choiceCharacters = choiceCharacters.concat(numberCharacters)
      pwdTxt = pwdTxt.concat(numberCharacters[numKey])


    } else if (
      pwdChoice.charSpecial = true) {
      choiceCharacters = choiceCharacters.concat(specialCharacters)
      pwdTxt = pwdTxt.concat(specialCharacters[spcKey])
    }    
    console.log(pwdChoice.charNum);
    console.log(pwdTxt.length);
    console.log(pwdTxt);

    let countNum = pwdTxt.length;
    console.log(countNum);
    for (let i = 0; i < (pwdChoice.charNum - countNum); i++) {
      choiceKey = Math.floor((Math.random() * choiceCharacters.length) + 1);
      pwdTxt = pwdTxt.concat(choiceCharacters[choiceKey])
      console.log(pwdTxt);
    }
  }

    // Write password to the #password input
    function writePassword() {
      console.log("Clicked On")
      let password = generatePassword();
      let passwordText = document.querySelector("#password");
      passwordText.value = pwdTxt;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
// if (alphabetNumericCharacters.includes(key)) {
  // for (let i = 0; i < elements.length; i++) {
    // elements[i].textContent += event.key
  // }
 


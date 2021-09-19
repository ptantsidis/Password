// Assignment Code
let generateBtn = document.querySelector("#generate");
let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); //# of characters =24
let lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(''); //# of characters =24
let numberCharacters = '0123456789'.split(''); //10 numbers
let specialCharacters = '!@#$%^&*()_+~<>?,./{}|'.split('');
let charRules = [8, 128, "false"] //min,max and did we validate for upper lower or number

function generatePassword() {
  let pwdTxt = [];
  let choiceCharacters = [];
  let pwdChoice = {
    charNum: 0,
    charUpper: false,
    charLower: false,
    charNumber: false,
    charSpecial: false,
  }
  // track user options
  let userChoice = window.prompt("Number of Characters in password?");

  if ((userChoice >= charRules[0]) && (userChoice <= charRules[1])) {
    pwdChoice.charNum = userChoice;
  } else {
    alert("Number must be between " + charRules[0] + " " + charRules[1]);
    return;
  }

  pwdChoice.charUpper = window.confirm("Uppercase Characters OK?");
  pwdChoice.charLower = window.confirm("Lowercase Characters OK?");
  pwdChoice.charNumber = window.confirm("Number Characters OK?");
  pwdChoice.charSpecial = window.confirm("Special Characters OK?");

  // Validate at least one is on
  if ((pwdChoice.charNumber === false) && (pwdChoice.charUpper === false) && (pwdChoice.charLower === false) && (pwdChoice.charSpecial === false)) {
    alert("Must have a least one True choice for upper, lower, number or special character, try again");
    return;
  }


  upperKey = Math.floor((Math.random() * 23) + 1); // to pick random indexes from specific arrays
  lowerKey = Math.floor((Math.random() * 23) + 1); // to pick random indexes from specific arrays
  numKey = Math.floor((Math.random() * 9) + 1);
  spcKey = Math.floor((Math.random() * 23) + 1);

  if (pwdChoice.charUpper === true) {
    choiceCharacters = choiceCharacters.concat(uppercaseCharacters);
    pwdTxt = pwdTxt.concat(uppercaseCharacters[upperKey]);
    console.log(pwdChoice.charUpper);
  }

  if (pwdChoice.charLower === true) {
    choiceCharacters = choiceCharacters.concat(lowercaseCharacters);
    pwdTxt = pwdTxt.concat(lowercaseCharacters[lowerKey]);
    console.log(pwdChoice.charLower);
  }

  if (pwdChoice.charNumber === true) {
    choiceCharacters = choiceCharacters.concat(numberCharacters);
    pwdTxt = pwdTxt.concat(numberCharacters[numKey]);
    console.log(pwdChoice.charNumber);
  }

  if (pwdChoice.charSpecial === true) {
    choiceCharacters = choiceCharacters.concat(specialCharacters);
    pwdTxt = pwdTxt.concat(specialCharacters[spcKey]);
    console.log(pwdChoice.charSpecial);
  }

  let countNum = pwdTxt.length;
  console.log(countNum);

  for (let i = 0; i < (pwdChoice.charNum - countNum); i++) {
     choiceKey = Math.floor((Math.random() * choiceCharacters.length) + 1);
    pwdTxt = pwdTxt.concat(choiceCharacters[choiceKey])
  }
  let pwdString = pwdTxt.join("");
  console.log(pwdTxt);
  console.log(pwdChoice);
  return pwdString;
}
// Write password to the #password input
function writePassword() {
  console.log("Clicked On")
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// if (alphabetNumericCharacters.includes(key)) {
  // for (let i = 0; i < elements.length; i++) {
    // elements[i].textContent += event.key
  // }



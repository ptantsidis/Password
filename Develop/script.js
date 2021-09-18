// Assignment Code
let generateBtn = document.querySelector("#generate");
let alphabetCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(''); //# of characters =24
let numberCharacters = '0123456789'.split(''); //10 numbers
let specialCharacters = '!@#$%^&*()_+~`<>?,./{}|'.split('');
let charRules = [8,128,"false"] //min,max and did we validate for upper lower or number
// let CharKey = Math.floor(Math.random() * 23) + 1; // to pick random indexes from specific arrays
// let numKey = Math.floor(Math.random() * 9) + 1;
// let spcKey = Math.floor(Math.random() * 23) + 1;

let pwdChoice = {
  charNum: 0,
  charUpper: false,
  charLower: false,
  charNumber: false,
  charSpecial: false,
  }
function generatePassword(){
  // track user options
let  userChoice = window.prompt("Number of Characters in password?");
  console.log(userChoice);
if ((userChoice >= charRules[0]) && (userChoice <= charRules[1])) {
    pwdChoice.charNum = userChoice;  
}  else { 
  alert("Number must be between " + charRules[0] + " " + charRules[1]);
  return;
}
let  userUpper = window.prompt("Uppercase Characters T-True?");
  userUpper = userUpper.toUpperCase()
if ((!userUpper === "T" ) || (!userUpper === "F")) {
  alert ( "Must be T for True or anything else will be False");
} else if (userUpper === "T") 
{ 
    pwdChoice.charUpper = true;
} else { pwdChoice.charUpper = false;
} 

console.log(pwdChoice.charUpper);

let  userLower = window.prompt("Lowercase Characters T-True?");
  userLower = userLower.toUpperCase()
if ((!userLower === "T" ) || (!userLower === "F")) {
  alert ( "Must be T for True or anything else will be False");
} else if (userLower === "T") { 
    pwdChoice.charLower = true;
} else { 
  pwdChoice.charLower = false;
} 
console.log(pwdChoice.charLower);

let  userNumber = window.prompt("Numbered Characters T-True?");
userNumber = userNumber.toUpperCase()
if ((!userNumber === "T" ) || (!userNumber === "F")) {
  alert ( "Must be T for True or anything else will be False");
} else if (userNumber === "T") { 
    pwdChoice.charNumber = true;
} else { pwdChoice.charNumber = false;
} 
console.log(pwdChoice.charNumber);

let  userSpecial = window.prompt("Special Characters T-True?");
userSpecial = userSpecial.toUpperCase()
if ((!userSpecial === "T" ) || (!userSpecial === "F")) {
  alert ( "Must be T for True or anything else will be False");
} else if (userSpecial === "T") { 
    pwdChoice.charSpecial = true;
} else if (
  (pwdChoice.charNumber = false) && (pwdChoice.charLower = false) && ( pwdChoice.charLower = false)) 
{ 
  alert ( "Must have a least one True choice for upper, lower, number or special character. Choosing special characters.")
  pwdChoice.charSpecial = true;  
  charRules[2] = true;
} else {
  pwdChoice.charSpecial = false; 
  charRules[2] = true;
}  
console.log(pwdChoice.charSpecial);
charKey = Math.floor((Math.random() * 23) + 1); // to pick random indexes from specific arrays
numKey = Math.floor((Math.random() * 9) + 1);
spcKey = Math.floor((Math.random() * 23) + 1);

//
for (let i=0; i < pwdChoice.charNum; i++) {
  if (pwdChoice.charUpper = true) {
    pwdTxt = "";
    pwdTxt = pwdTxt + alphabetCharacters[charKey].toUpperCase()
    console.log(pwdTxt);
    // get a character to add to password
    // merge with new array
  } else if (
    pwdChoice.charLower = true) { 
    pwdTxt = pwdTxt + alphabetCharacters[charKey].toLowerCase()
    console.log(pwdTxt);
    // merge with new array
  } 
  if (pwdChoice.charNumber = true) {
    pwdTxt = pwdTxt + numberCharacters[numKey]
    console.log(pwdTxt);
    // merge with new array
  } else if (
    pwdChoice.charSpecial = true) { 
    pwdTxt = pwdTxt + specialCharacters[spcKey]
    console.log(pwdTxt);
    // merge with new array

  }
    
  //based on true in object selector
  // pick one character from each true then 
  //merge arrays
  // then random from the merged arrays

}
}


// for (let i=0, i < 5; i++){
  
// } 

  // create arrays from selections

  // validate selections

  // combine and give random value through a loop

  // return value created = password
console.log(pwdChoice)
console.log(charRules)
console.log(alphabetCharacters);
console.log(numberCharacters);
console.log(specialCharacters);
// Write password to the #password input
function writePassword() {
  console.log("Clicked On")
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  console.log(pwdChoice);
  console.log(charRules);


 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// if (alphabetNumericCharacters.includes(key)) {
  // for (let i = 0; i < elements.length; i++) {
    // elements[i].textContent += event.key;
  // }
//}


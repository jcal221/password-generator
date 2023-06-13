const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 15;
let includeSymbols = false;
let includeNumbers = false;

function getRandomCharacter() {
  const validCharacters = [];
  
  if (includeNumbers) {
    validCharacters.push(...characters.slice(0, 62));
  } else {
    validCharacters.push(...characters.slice(0, 52));
  }
  
  if (includeSymbols) {
    validCharacters.push(...characters.slice(52));
  }
  
  const randomChar = Math.floor(Math.random() * validCharacters.length);
  return validCharacters[randomChar];
}

function generateRandomPassword() {
  let randomPassword = "";
  
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter();
  }
  
  return randomPassword;
}

function getPasswords() {
  const password1Element = document.getElementById("password1");
  const password2Element = document.getElementById("password2");

  passwordLength = document.getElementById("numberInput").value;
  includeSymbols = document.getElementById("symbols-check").checked;
  includeNumbers = document.getElementById("numbers-check").checked;

  const password1 = generateRandomPassword();
  const password2 = generateRandomPassword();

  password1Element.textContent = password1;
  password2Element.textContent = password2;
}

function copyToClipboard(id) {
  const passwordElement = document.getElementById(id);
  const passwordText = passwordElement.textContent;
  navigator.clipboard.writeText(passwordText);
}

document.getElementById("generate-password-btn").addEventListener("click", getPasswords);
document.getElementById("password1-generated-copy-btn").addEventListener("click", () => copyToClipboard("password1"));
document.getElementById("password2-generated-copy-btn").addEventListener("click", () => copyToClipboard("password2"));

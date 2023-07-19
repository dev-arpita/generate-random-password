const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let passwordChar = 15;

//create randon charecter
function getRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];   
}

// generate random password
function getRandomPassword() {
     let randomPassword = "";
    
    for(let i = 0; i < passwordChar; i++) { 
       randomPassword += getRandomChar();
    };
     return randomPassword;
}


//render generatePassword()
function generatePassword() {
    passwordOne.textContent = getRandomPassword();
    passwordTwo.textContent = getRandomPassword();
}





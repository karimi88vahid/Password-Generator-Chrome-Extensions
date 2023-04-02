const generateBtn = document.getElementById("generate-btn");
const generatedPassword = document.getElementById("generated-password");
// const generatedPassword2 = document.getElementById("generated-password2");
const changePasswordLength = document.querySelector('.change-password-length');


function getpass(num=6) 
// problem is here to send the numbers of password to the function and I've set it manully 12 ...
{
    let chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
    
    let password = "";
    for (let i = 0; i < num; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }
  
  generateBtn.addEventListener("click", function() {
  //  debugger; 
    
    let num = changePasswordLength.value;
    changePasswordLength.addEventListener('input' , () =>  num = changePasswordLength.value);
    let pass;
    if(num !== ""){
      pass = getpass(num);
    }
    else {
      pass = getpass();
      
    }
    // let pass2 = getpass(num);
    
    generatedPassword.textContent = pass;
    generatedPassword.style.background = "#10B981";   

    // generatedPassword2.textContent = pass2;

  });

  generatedPassword.addEventListener("click",function(){

    if(generatedPassword.textContent != "Your Password..."){
      
      navigator.clipboard.writeText(generatedPassword.textContent);
      generatedPassword.textContent = "copied to clipboard";
      generatedPassword.style.background = "blue";   

    }
  });

  // generatedPassword2.addEventListener("click",function(){

  //   navigator.clipboard.writeText(generatedPassword2.textContent);
  //   generatedPassword2.textContent = "copied to clipboard";
  // });
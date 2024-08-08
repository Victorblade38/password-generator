const passwordBox = document.getElementById("password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{></-=";
const allChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

function createPassword() {
  let password = "";

  //the function creates a random number from the length of the given string and the char at the index(generated number) is added to the password
  //   password += uppercase[Math.floor(Math.random() * uppercase.length)];
  //   password += lowercase[Math.floor(Math.random() * lowercase.length)];
  //   password += number[Math.floor(Math.random() * number.length)];
  //   password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

createPassword();

//Previously it use 4 incremnts to add one of each (char,num,symbols)
//and then use while loop to fill the remaining lenght

//Instead just removed the increment and using the loop directly to fill the length of the passowrd

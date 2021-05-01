/*Create a program in JavaScript that prompts for your name and prints a greeting using your name.*/


function greeting(userName) {
  alert(`Hello, ${userName} !`);
}
let userName = prompt(`Type your name please`);
while(userName.trim() === ''){
     userName = prompt(`Your name is required, it should not be empty`);
}
greeting(userName);

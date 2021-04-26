
let number = prompt("Enter a number between 0 and 20  ");

/* check the variable should be a number and should be less than 20 */

if (number == "" || number>20 || isNaN(Number(number))){
number = prompt("please enter a number less than 20");
  
}

  
if(number % 2 == 0) {
    console.log("The number is even.");
}


else {
    console.log("The number is odd.");
}
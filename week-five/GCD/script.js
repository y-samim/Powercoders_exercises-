let GCD = 0
let remainder = 0
let number1 = 0;
let number2 = 0;
let orignalNumber1 = 0;
let orignalNumber2 = 0;
do {
 number1 = Number(prompt(please put in your first positive integer));
 number2 = Number(prompt(please put in your second positive integer));



  /*check the number would be only in integer*/
   if(number1 <= 0 || !Number.isInteger(number1) || number2 <= 0 || !Number.isInteger(number2)) {

   console.log(`please enter full numbers greater than 0!`)
}

} while (number1 <= 0 || !Number.isInteger(number1) || number2 <= 0 || !Number.isInteger(number2));
orignalNumber1 = number1;
orignalNumber2 = number2;
do {
   remainder = number1 % number2;
    if(remainder === 0){
      GCD = number2;
      break;
    } else {
      number1 = number2;
      number2 = remainder;
    }
} while (reaminder > 0); 

console.log("the greatest common divisor of" + orignalNumber1 + "and" + orignalNumber2 + "is" + GCD);

  let number = prompt("Enter a number between 0 and 10  ");

  if (number == "" || number>10 || isNaN(Number(number))){
  number = prompt("please enter a number less than 20");
    
  }

let result = number * 9; 

console.log(`${number} * 9 = ${result}`);
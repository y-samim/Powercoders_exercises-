
let birthYear =Number(prompt("enter your birth year please"));
let futureYear =Number(prompt("enter the future year; you want to calculate"));
let futureAge = calculateAge

function calculateAge(bY,fY){
  return fY - bY;

}

console.log(`You will be `+ calculateAge(birthYear,futureYear)+ " " + `in "${futureYear}"`);


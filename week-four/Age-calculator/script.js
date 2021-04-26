let birthYear = prompt("enter your birth year")
let futureYear = 2040
let futureAge1
let futureAge2



futureAge1 = futureYear - birthYear
futureAge2 = futureAge1 + 1

let template = ` I will be either ${futureAge1} or ${futureAge2} in ${futureYear}`;

console.log(template);

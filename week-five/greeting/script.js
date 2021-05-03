function greeting(myName="Samuel", yourName="Almas") {
  console.log(arguments);
  return "hello " + myName + " and " + yourName + ".";
}
let greetings = greeting("Mehmet", "Ömer");
console.log(greetings);
countdown(10);
function countdown(number) {
  if (number >= 5) {
    console.log(number);
    number = number - 1;
    countdown(number);
  }
}
let myFunction = function(arg1, arg2, arg3){ 
  return arg1 + arg2 * arg3; 
}
console.log(myFunction(1, 2, 3));
function greetOnePerson(personName){
  return "hello " + personName;
}
let personName = "Carlos";
let person2Name = "Mark";
let a = personName => ("hello " + personName + " hello");
console.log(a(personName))
let greatToPeople = (name1, name2) => "Hello " + name1 + " and " + name2;
console.log(greatToPeople("Mayuri", "Yalda"));
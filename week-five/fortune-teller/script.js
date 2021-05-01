
function fortuneTeller(numberOfChilderen, partnersName, getLocation, jobTitle) {

this.numberOfChilderen = numberOfChilderen;
this.partnersName = partnersName;
this.getLocation = getLocation;
this.jobTitle = jobTitle;
}
 function madlib(sInput){
 console.log(`You will have a ${sInput.numberOfChilderen} children ,Your partners name will be ${sInput.partnersName} , Your future job will be ${sInput.jobTitle} and you will be living in ${sInput.getLocation} .`);
 }

let userInput = new fortuneTeller();
  userInput.numberOfChilderen = prompt(`Number of desired childeren`);
  userInput.partnersName = prompt("please add your future partner name ");
  userInput.getLocation = prompt("please enter where you want to live");
  userInput.jobTitle = prompt("please enter your desire job");

madlib(userInput);

/* it will show the values only that u puted in the funtctions

function fortuneTeller1(jobTitle,getLocation,partnersName,numberOfChildren){
  return `you will be ${jobTitle} in ${getLocation} and you will marry with ${partnersName} and you will have ${numberOfChildren} chidlren .`;
}
console.log(fortuneTeller1("Doctor","London","Superman","10"));
console.log(fortuneTeller1("web-developer","Paris","Batman","4"));
console.log(fortuneTeller1("web designer","Miami","Celina Gomez","2"));
console.log(fortuneTeller1("Programmer","Zurich","Farhad","0"));
*/


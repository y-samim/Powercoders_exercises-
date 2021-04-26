let numberOfChildren;
let partnersName;
let getLocation;
let jobTitle;
/*The let keyword is used to declare variables in JavaScript. The var keyword can also be used to declare variables, but the key difference between them lies in their scopes. var is function scoped while let is block scoped. What is Variable? Variable means anything that can vary. JavaScript includes variables which hold the data value and it can be changed anytime, in variable you store data-*/


numberOfChildren = prompt("Number of desired children: ");
partnersName = prompt("ideal partner name: ");
getLocation = prompt("where you want to live?: ");
jobTitle = prompt("Your desired Profession ");


let textTemplate = `You will be a ${jobTitle} in ${getLocation}, and married to ${partnersName} with ${numberOfChildren}`;


/*The console. log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user. Syntax: console. log(A)*/
console.log(textTemplate)




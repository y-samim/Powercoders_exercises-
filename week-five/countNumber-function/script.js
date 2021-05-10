let personName =prompt("please enter your name");
if(personName == ""){
   prompt("Plese enter your name");
}
function countChar(name){
  return name.length;
}

console.log(`Your name contains`+ " " + countChar(personName) + " " + `character`);



const num = 124323;
const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));
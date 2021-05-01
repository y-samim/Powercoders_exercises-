let personName =prompt("please enter your name");
if(personName == ""){
   prompt("Plese enter your name");
}
function countChar(name){
  return name.length;
}

console.log(`Your name contains`+ " " + countChar(personName) + " " + `character`);

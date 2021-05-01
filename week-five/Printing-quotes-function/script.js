let author= prompt(`Enter the author name`);
let quote= prompt("please enter the quote");
while(quote==""||author==""){
   quote=prompt("please enter your desire quote");
   author=prompt("please enter te author name");

}
function printQuote(writer,quote){
  return `${writer} says,"${quote}"`;
}
console.log(printQuote(author,quote));


let dayOftheWeek = prompt("please enter the name of a day you want to translate in German")
let translatevar=dayOftheWeek.toLowerCase();
let translate
/* assigned the variable to transaltevar to accept the lowercase*/
if (translatevar == "monday") {

  translate = "Montag";
}

else if (translatevar == "tuesday") {

  translate = "Dienstag";
}

else if (translatevar == "wednesday") {

  translate = "Mittwoch";
}

else if (translatevar == "thursday") {

  translate = "Donnerstag";
}

else if (translatevar == "friday") {

  translate = "Freitag";
 }

else if (translatevar == "saturday") {
  
  translate = "Samstag";
}

else if (translatevar == "sunday") {
  
  translate = "Sonntag";
}


console.log(`the translation for this day is ${translate}`);


/*let dayOftheWeek=prompt("Enter the day of the week");
let lowDay=dayOftheWeek.toLowerCase();
switch(lowDay){
 case "monday":console.log("Montag");
               break;
case "tuesday":console.log("Dienstag");
                break;
case "wednesday":console.log("Mittwoch");
                break;
case "thursday":console.log("Donnerstag");
                break;
case "friday":console.log("Freitag");
                break;
case "saturday":console.log("Samstag");
                break;  
case "sunday":console.log("Sonntag");
break; 
default:console.log("Enter the correct day");        
}
*/







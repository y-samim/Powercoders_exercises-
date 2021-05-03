/*let toDoList = {
                readBook:-1,
                coding:-1,
                cleaning:-1,
                workOnProject:-1,
                GoShopping:-1,
}

Object.keys(toDolist).map(function(key){
       let value =prompt(`if you completed work ${key} press 1 for yes and 0 ${key}for no`);
      (value === `1`) ? toDoList[key] = 1 : toDolist[key]=0;
 });

console.log(toDoList);
  
            */
            
            
 /*          
let toDoList = {
                readABook : -1,
                makingSport : -1,
                meetWithFriends : -1,
                takeNewspaper : -4342341,
                workOnProject : -1,
                goShopping : -1,
                maditation : -1
}
//console.log(toDoList[`takeNewspaper`]);
Object.keys(toDoList).map(function(key) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    let value = -1;
    value = prompt(`did you ${key} if yes please enter 1 otherwise please enter 0`);
    (value === `1`) ? toDoList[key] = 1 : toDoList[key] = 0;
});
 console.log(toDoList);

*/
/*
function fruits(apple, kiwi, orange, mango){
  this.first=apple; 
  this.second=kiwi;
  this.third=orange;
  this.fourth=mango;
}

let fruitItems=new fruits("watermelon","ananas","melon","banana");
for(let items in fruitItems){
  console.log(items);
}
*/
/*
let list = ["orange", "banana", "kiwi", "mango"];
for(let fruits of list){
 console.log(fruits);
}
*/
/*
let list =["orange","banana","kiwi","mango"]
for(let banana of  list){
 console.log(list);
}

*/
/*
let list =["orange","banana","kiwi","mango"]

 console.log(list[1]); /*1 for chososing the banana*/

/* for reahing the object and values */
/*
let obj = {oranges: 5, bananas: 3, mango: 2};
 for(let item of Object.values(obj)){
    console.log(item);
 }
 for(let item in obj){
    console.log(item);
    console.log(obj[item]);
 }
*/
/*
class Person {
constructor(name, age, married) {
this.name = name;
this.age = age;
this.isMarried = married;
this.hello = function() {
return "Hello " + this.name + `your age is` + " " + this.age;
}
}
}
let yalda = new Person(`yalda`,30,false);

console.log(yalda.hello());

*/
/*
 var array = ["Banana", "Apples", "Oranges", "Blueberries"];
 console.log(array[2]);
*/

/*
 var array = ["Banana", "Apples", "Oranges", "Blueberries"];
 console.log(array.shift()); // remove banana from the front
// ["Banana"]

*/

/*
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(array.sort());        // Sorts the elements of fruits
/*
fruits.sort();        // First sort the elements of fruits
fruits.reverse();     // Then reverse the order of the elements
*/
/*
var array = ["Banana", "Apples", "Oranges", "Blueberries"];  The push() method adds new items to the end of an array, and returns the new length.
console.log(array.push("kiwi","melon")); To add items at the beginning of an array, use the unshift() method.

*/

/*
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.splice(1,1); /*the first 1 indicate the position and the second 1 is how many items you want to delete*/
/*console.log(array);
*/
/*
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array.reverse());

*/

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove the Banana from the array.
array.shift();
// console.log(array);
// Sort the array in order.
array.sort();
// Put "Kiwi" at the end of the array.
array.push(`Kiwi`);
// console.log(array);
// Remove "Apples" from the array.
array.splice(0,1);
// console.log(array);
// Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log(array);
// You should at the end have ["Kiwi", "Oranges", "Blueberries"]

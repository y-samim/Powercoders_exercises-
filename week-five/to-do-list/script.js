const password ="password";
let userPassword = "";

/*Show input to add new item*/
let input = document.createElement("input");
input.innerText="list";

let btn = document.createElement("button");
btn.innerText = "add item";

let ul = document.createElement("ul");
ul.innerText = "this is the to do list";

let btn1 = document.createElement("button");
btn1.innerText ="remove item";

let input1 =document.createElement("input");
input1.inertext=("list");

let h1 = document.createElement("h1");
h1.innerHTML="Do you want to create a new list";



function removeAll(){
 ul.innerHTML ="";
/* ul.innerText="the list items";
if you want to add a text */

  
}

h1.addEventListener("click",removeAll);



function listItems(){
/*Add new to-do item to list*/
    let li =document.createElement("li");
    li.innerText= input.value;
    input.value ="";
    ul.appendChild(li); 
    sortList();
   // input.innerText = "";
}

function sortList() {
    let ul = document.querySelector(`ul`);
    Array.from(ul.getElementsByTagName("li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
  }

/*add an event name called by click: when i click add*/
btn.addEventListener("click",listItems);


/*var array = [1, 2, 3, "mm", "b", "c", "mm", "y", "mm"];
var list = document.getElementById("list"); */

function removeItem(){
  const ul =document.querySelector(`ul`);
  const itemToRemove =input1.value;

  for(const li of ul.querySelectorAll("li")){
    if(itemToRemove == li.innerText){
      li.remove();
    }
  }
}

btn1.addEventListener("click", removeItem);




userPassword =prompt("what is your password");
while(userPassword !=password){
  userPassword=prompt("write the user password");
}


console.log(`your password for this is checked`);

document.querySelector(`body`) .appendChild(input);
document.querySelector(`body`) .appendChild(btn);
document.querySelector(`body`) .appendChild(ul);
document.querySelector(`body`) .appendChild(btn1);
document.querySelector(`body`) .appendChild(input1);
document.querySelector(`body`) .appendChild(h1);




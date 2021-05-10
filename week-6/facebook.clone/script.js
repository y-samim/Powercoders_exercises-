/*the document.forms is searching the element by name of which is given*/
let name = document.forms[0]["name"];
let password = document.forms[0]["password"];
let email = document.forms[0]["email"];
let submit = document.forms[0];
/*let button =document.forms[0]["button"];*/
let hidden = document.querySelector('.duck');
let hide1 = document.querySelector('.formStyle1');
    

/*let post = document.createElement("INPUT");*/

var text = document.getElementById("myText").value;
document.getElementById("demo").innerHTML = text;


email.placeholder = 'test@example.com';
password.placeholder = 'password';
 

/* the (evt) event means it will not take our cosole.log to default, instead it it will give the condition that we want*/
function formLogin(evt) {
 /*focus()
Javascript focus() methods helps to highlight a HTML form element. It sets the element as an active element in the current document. In current documentation, focus can be applied to only one single element. The focus can be applied either to a text, a button, etc.  

syntax
element.focus(options);*/
evt.preventDefault();

 if (name.value == "") {
                    window.alert("Please enter your name.");
                    name.focus();
                    return false;
                }

if (password.value == "") {
                        window.alert("please enter the correct password");
                        password.focus();
                        return false;
                    }
if (email.value == ""){
                    window.alert("please enter a valid email-address");
                    email.focus();
                    return false;
                  }
if(password.value === "yalda") {
  hidden.classList.remove('hidden');
  hide1.classList.remove('formStyle1'); 
 return true;
 
  
}
  

}


submit.addEventListener('submit', (evt) => { formLogin(evt) });


function myLike() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "I like this post!");
  document.body.appendChild(x);
}


function myFunction1() {
  var x = document.getElementById("myTime").value;
  document.getElementById("demo").innerHTML = x;
}





function sharePost() {
  var post1 = document.getElementById("myText").value;
  document.getElementById("demo2").innerHTML = post1;
}
/*const formContainer = document.getElementById(`form`);*/

/*post.setAttribute("type", "text");*/

var clicks = 0;
function onClick() 
{
    clicks += 1;
    document.getElementById("output").innerHTML = clicks + " " +"Likes";
};



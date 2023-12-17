//Create element with DOM API's

// let's create a paragraph 
const para = document.createElement("p"); // here we called a function  to create a tag p and stored it in  variable para
para.textContent = "this is created using dom-api";// content  we want to put in paragraph tag

// Let's show the content in italic

para.innerHTML = "this is created using <em>dom-api</em>";  // if we use innerHtml instead of textContent than we can use HTML tags directly


// let's create a span tag along with assigning a class and id.
const span =  document.createElement("span");
span.id = "span-id"; // Here is a id name span-id in span
span.className = "blue"; // this is class named blue
span.textContent = " this is span created using dom.createElement";// this is content in the span tag
span.style.backgroundColor = "yellow"; // we can do styling by using dom api

//method to add  or remove class list
para.classList.add("red");
para.classList.remove("red");

//One more method to set Attribute in tag
para.setAttribute("id", "js-para");
console.log(para.getAttribute("id"));



// Appending the value of span in para
para.appendChild(span);

//Appending the value of all the tags in body 
document.body.appendChild(para);// by this call we can append the p tag in body



//Let's make LIST

const hobbies = ["coding", "Swimming", "jogging"];

const list = document.createElement("ul");

for(let hobby of hobbies)
{
    list.innerHTML += "<li>"+ hobby +"</li>";
}

list.style.color = "blue";

document.body.appendChild(list);



// Get element 
console.log(document.getElementById("span-id").textContent);

console.log(document.getElementsByClassName("blue")[0].textContent);

console.log(document.querySelectorAll("p"));


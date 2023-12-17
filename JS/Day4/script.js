//Function
//1. comparing number
function compareNumber(a, b) // function keyword then name of the function and in paranthesis we pass the 
{
  if (a > b) {
    console.log(a + " is greated than " + b);
  } else {
    console.log(b + " is greater than " + a);
  }
}

compareNumber(4, 5); // calling our function


//2. Print function
function print()
{
    console.log("This is printed in the console");
}

print();

//Function Expression Syntax
const add = function addNumber(a, b) // storing result of function a variable
{
    return a+b;
}                  
const result = add(5, 7);
console.log(result);

// Anonymous Function
const subtract = function(a, b) // defining function anonymously
{
    return a - b;
}
console.log(subtract(5, 3)); // calling function

const person = {
    firstName : "bhupendra",
    lastName : " Chauhan",
    print: function(){
        console.log("this is function inside a object")// we can define a function inside a object as well
    }
}
person.print(); // calling function with object name




//Data types

//1 number
console.log(12);
12.5

// 2 string
console.log("bhupendra");

// 3 boolean
console.log(true);

//variables

1
var firstName = "Devnest";
console.log(firstName);

2
let foo = "parth"; // string assigned to variable foo
console.log(foo);

foo = 1011; // integer assigned to variable foo
console.log(foo);

foo = true; // boolean assigned to variable foo
console.log(foo);

// So the variable which are defined  with let method are dynamic can be changed accordingly

3.
const myName = "Bhupendra Chauhan";
console.log(myName);
// myName = 123; // => This will show error as we know const is not dynamic it has fixed and locked value



//Custom Data types : objects

let person ={firstName: "Bhupendra", lastName: "Chauhan", age: 30};

console.log(person);

console.log(person.firstName)// calling a specific value of a data type
console.log(person.age)

person.isLearningFrontend = true;
console.log(person);

//so this was the way we can make a data structure 

// Operators in JS

let num1 = 10,  num2 = 20;

// Sum Operator
console.log(num1+num2);

// Increment Operator
//console.log(num1++); // =>   Post Increment operator in this it will fist print then incriment
console.log(num1);

//Decrement Operator
//console.log(++num1); // => Pre inceremnt operator in this  it wil first increment the it will print

//
num1 = num1 + 2;
console.log(num1);
num1 += 2; // shorthand oeprator
console.log(num1);

//Subtract operator
console.log(num2-num1);

// console.log(num1--);  // => Decrement operator 
//console.log(--num1); 

// Multply operator
console.log(num1*num2);

// divide operator
console.log(num2/num1);

//Types of conversion 

num1.toString() // function to conver integer to string

console.log(num1.toString());
parseInt(num1);// converting num1 as string to integer again
console.log(num1);

false.toString();
console.log(Boolean(0));

//Types of Coercion

console.log("John's age is " + 30);

let str1 = "Bhupendra";
let str2 = "Chauhan";

console.log(str1+" "+ str2); // two strings are added 

console.log("1" + 1); // by default js  converted 1 in string and added as string

console.log(parseInt("1") + 1);

console.log("1"-1);// Here "1" is identified as  integer by default

console.log("2"-1);

// Conditional Operators

let a = 5;
let b = 2;

console.log(a > b);
console.log(a<b);
console.log(a==b);

// flow statement

if (a >b )
{
    console.log(a +" is greated than " + b)
}
else{
    console.log(b +" is greater than "+ a);
}

b = 5 // updated the value to 5
if (a >b )
{
    console.log(a +" is greated than " + b)
}
else if(a<b)
{
    console.log(b +" is greater than "+ a);
}
else{
    console.log("both numbers are equal");
}


// Ternary operator
num1 = 5;
num2 = 8;

num2 > num1 ? console.log("num2 is greater than num1") : console.log("num1 is greater than num1");
// ? means if condition is true and : means else part

num2 = 5;
num2 > num1 ? console.log("num2 is greater than num1") : num1<num2 ? console.log("num1 is greater than num1") : console.log(" both are equal")

// Switch cases in JS

num1 = 2;
switch(num1){
    case 1:
        console.log("Sunday");
        break;
    
    case 2:
        console.log("Monday");
        break;
    
    case31:
        console.log("Tuesday");
        break;
    
    case 4:
        console.log("Wednesday");
        break;
    
    case 5:
        console.log("Thursday");
        break;
    case 6:;
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input for day");
}



// LOOPS in JS

// 1. While LOOP

// lets print number 1 to 10
let index = 1;

while(index <= 10) // condition
{
    console.log(index); // execution
    index++; // updation
}

// 2. Do while : this always get executed at least 1 time
index = 0;
do{
    console.log(index); // execution
    index++; // updation
}
while(index<=10) // condition


// 3 For LOOP

// for(declaration; condition; updation;)
// {
//     console.log(execution);
// }

index = 1;
for(index; index<=10; index++)
{
    console.log(index);
}

// print characters of string
let text = "COLLEGE GRIHASTHI";

console.log(text.length);// this will count the characters in the string.

for(index = 0;  index<= text.length; index++)
{
    console.log(text.charAt(index)); // charAt  will print the  character

}

// Arrays DATA Structure

const fruits = ['apple', 'Banana', 'kiwi', 'peer', 'pineapple', 'watermelon', 'musmelon', 'papaya'];
console.log(fruits);
console.log(fruits[2]);


let numbers = [1, 2, 3, 4, 5, 6, 10, 20, 40, 13, 15, 18];
console.log(numbers.length);

let arr = [1, 10, 11, 23];
console.log(arr);
arr[2] = 21; // Here we can update the value of array  by accessing the index
console.log(arr);

//PUSH and POP function

arr.push(21); // 21 will get added at last 
console.log(arr);

arr.pop();// last value removed
console.log(arr.pop()); // will give the removed value
console.log(arr);

//FOR OF LOOP
index = 0;
let oddNumbers =[]; // Array of odd numbers
let evenNumbers =[];// Array of even number
for(let num of numbers)
{
   if(num%2==0)
   {
      evenNumbers.push(num);
   }
   else
   {
    oddNumbers.push(num);
   }
}
console.log(evenNumbers);
console.log(oddNumbers);

// FOR IN 

for(let index in numbers)
{
    console.log(numbers[index]);
}

// MERGER & Sepration of arrays

console.log(oddNumbers.concat(evenNumbers));

console.log(numbers.slice(0, 5));
console.log(numbers.slice(7, -2));








 





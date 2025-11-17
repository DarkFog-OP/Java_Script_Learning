//Q1. Create an array of 5 numbers and print each value using forEach().

const arr=[1,2,3,4,5];
arr.forEach(function(x){
    console.log(x);
}    
)

//Q2 check if its an array or not
let x = {name: "Deepak"};

console.log(Array.isArray(x)); //false;

//Q3 Convert string char into arr s="HELLO"
let s="DEEPAK";
const arr3=Array.from(s);

//Q4 add element at the begining
arr.unshift("Addded at front")

//Q5 Create an array and find its length.
arr.length; //6






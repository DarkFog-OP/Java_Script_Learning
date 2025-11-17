//In this chajpter we will study aboyut the numbers
let x=3;
x=3.24;
x=3.1234;

console.log(typeof x , x);
//js stores all types of numbers -int,float,double in the number data trype only , no need of anopther data type
// They are sotred as 64 bit flaoting point

x = 999999999999999;   // 15 digits x will be 999999999999999
let y = 9999999999999999;  //16 digits y will be 10000000000000000
console.log(x,y);

//the floating point accuracy is not always 100% 
console.log(0.1+0.2);   //it return 0.30000000000004

//to solve_this issue always multiply and divide by 10 or something but this is pure bullshit
console.log((0.1*(10) + 0.2*10)/10);


//JS uses "+" for both addition and concatination
console.log("23"+1);
console.log(1+"23");  // here it does the strings operations
  
console.log("12"-1); //here it does the arithmatic maths


//JavaScript will always try to convert the strings to number it possible and the operation is of the numbers like "- , /, * etc"
console.log("100"/"10");


//NaN = Not A Number 
//Whenever we try to perfomr some math operation on number numbers like "asad"/"adad" it will return NaN
console.log("10"/"Deepak");

//NOTE - NaN is a number so it will return a number type


//INFINITY
//if we calculate a numbe outside the scope of JS it will return infinity or -infinity
console.log(23/0); //infiniy
console.log(-23/0); // -infinity







//NUMBER_METHODS

let num=1234;

//1-string conversion
num = String(num);   //both fucntion will work
num = toString(num);

//2- Expontial conversion -> toExponential() returns a string, with a number rounded and written using exponential notation.
num=123;
console.log(num.toExponential(3)); //1.230e+2 , the argument denotes the number of decimal points to use

//3- Precision
num=112.231231233;
console.log(num.toPrecision(4)); //112.2
console.log(num.toPrecision(1)); //1e+2

//Other data types to Numher conversion
console.log(Number(true));         //1
console.log(Number("231de"));      //Nan
console.log(Number("   123    ")); //123

//see basic function like others you can implement by yourself like in Cpp;


//MATH_LIBRARY

console.log(Math.abs(-123123)); //123123
console.log(Math.max(12,123,2,1,3,1,3,31231)); //31231
console.log(Math.min(12,123,2,1,3,1,3,31231)); //1

//other cool fxns in Maths see in the console
console.log(Math.sin(0)); //0
console.log(Math.cos(0)); //1








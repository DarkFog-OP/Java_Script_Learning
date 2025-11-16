//Types of DataTypes - 8

/*

[IMMUTABLE]
1. Number = {int,float,double...}
2.String
3. Boolean
4. Null -> It shows the empty_ness , developers choice
5. undefined -> Defaulf value if the value is not assigned
6.BigInt -> long long int
7. symbol 

[MUTABLE]
7. Objects

*/


// 1] IMMUTABLE -> we can't directly change the part of the data type , but we can create a new DT and assign it to the old one to change the value

let Name ="DEEPAK";
Name[0]='d';
console.log(Name ,"\n");  //node here the D did not change to d , this shows the immutable property



/*Type converstion in the JS 

"5" + 3   // "53" (string + number → string)
"5" - 3   // 2   (string → number)
"5" * 2   // 10  (string → number)

Number("23")       // 23
Number("23abc")    // NaN = Not a Number
parseInt("23.9")   // 23
parseFloat("23.9") // 23.9

Boolean(1)     // true
Boolean(0)     // false
Boolean("")    // false
Boolean("Hi")  // true

String(23)         // "23"
(23).toString()    // "23"

*/

let num="143";
console.log(num, typeof num); // 143 string
num= Number(num);
console.log(num, typeof num); // 143 nummber


//similarly String(123), Boolean(1) & Number("123")






/*
Assigning and checking 

= -> assigning 
== -> checks if they have same value
=== -> checks if it has same value and same type
*/

let a=23;
let b="23";

console.log( a == b); // TRUE
console.log( a === b ); //FALSE




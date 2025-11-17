//This chapter we will study about arrays and how they wokr

/*
Arrays are of object type but they are different from object
arrays => we access the elements through the index 0,1,2,3..
object => we access the elements by key: value pairs
*/

//array declaration

//It's a good habbit to use const for array so that in code we dont reassign it to different things like arr=10; in future

// arrays can take anything as inputs-numbers,strings,functions,object,arrays
const arr1=["Deepak",312,["EP","IIT-MANDI"]]
const arr2= new Array("Deepak",312,["EP","IIT-MANDI"]);

let arr3 = Array.from("DEEPAK"); //cretaes a array from the given input
console.log(arr3); //[ 'D', 'E', 'E', 'P', 'A', 'K' ]


//both of them are3 same but we should use the 1st method as new Array(10) will create a array of size 10 which was not we indetnded
//we can use this also
const arr4 = Array.of(2); // creates a new array 

/*UNIQUE STUFFS
1. We can access any index of array even if thats out of the size bound , it will create a shollow holes till that index eg arr=[1,2,3,UD,UD,UD,UD,UD,UD,UD,UD,8]; 
2. Arrays are non primitive (Passsed by reference)
*/




//METHODS
const arr = [1,2,3];

//1 size
console.log(arr.length); //3

//2 push
arr.push(4); // [1,2,3,4]

//3 pop
arr.pop();  // [1,2,3]

//4 checks if its an array or not
Array.isArray([1, 2, 3]);   // true

//5 unshift - Shifts the elemts to right 
arr.unshift(0); //[0,1,2,3]

//6 shift - shifts the elements to left
arr.shift(); //[1,2,3]

//7 reverse
arr.reverse();
const cope = arr.toReversed(); //returns a copy of the reversed array

//8 Sort
arr.sort();
arr.toSorted(); //returns a copy of sorted array

//09 conversts to a string both are same
console.log(arr.toString());
console.log(String(arr));

//10 search 
arr.indexOf(0); //-1 if not present else idx of first occuranc
arr.lastIndexOf(0); //lasty idx if exits

//11 check is exists
arr.includes(0); //false , DNE

//12 N-dimension array to 1D array
const new_array=[[1,2],[3,[4,5]],6];
console.log(new_array); //[[1,2],[3,[4,5]],6]
console.log(new_array.flat()); // [1,2,3,4,5,6]

//13 Iterations

//runs the fxn with input x each time
arr.forEach(function(x){
    console.log(x);
})





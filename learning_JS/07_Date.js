// //This chapter is all about date and time which is a crucial part in the backend like state management and etc

// let today=new Date();
// console.log(today);   // odd looking outputs 2025-11-17T09:39:48.945Z

// //Note -> JS stores the date in millisecongds in the backend and the default reference date for the time calculation is 1970-01-01;

// //the dafault date
// console.log(new Date(0));

// //lets say x=12323413 milliseconds have passed till that day then
// console.log("After 12323413 days after default day => ",new Date(12323413).toLocaleString ());


// today = new Date(); //fetches todasy date using the browser 

// //fetching different part of the time like day , date , housrs , seconds

// //use .getXXXX

// console.log(today.getDate()); // date 
// console.log(today.getDay());  //monday
// console.log(today.getMonth()); // month but returns 0 indexed number
// console.log(today.getHours()); //house


// //Assigning a date 

// //types of input to work = 2,3,4,6
// //2 => yyyy,mm
// //3 => yyyy,mm,dd
// //4 => yyyy,mm,dd,hh
// //5 => yyyy,mm,dd,hh,min
// //6 => yyyy,mm,dd,hh.min,ms

// let target = new Date(2028,10,12,3);

// console.log(new Date(2028,10,12,3).toLocaleString()); // 11/12/2028, 3:00:00 AM
// console.log(new Date(2028,10).toLocaleString()); // 11/1/2028, 12:00:00 AM
// console.log(new Date(2028,10,12,3,45,3).toLocaleString()) //11/12/2028, 3:45:03 AM


// //NOTE - date is of object typr
// // console.log(typeof target); => Object

// //JS stores the date in milliseconds(numbers) so to check if time is same or not just euate them 

// console.log(new Date().getTime()); //1763374386062 miliseconds have passed since the default date


// //differet regions use differnet time formats like yyyy/dd/mm , dd/mm/yyyy etc so you need to take in acount of that also








//QUESTIONS

//Q1 print todys date in dd-mm-yyyy format
console.log(new Date().toLocaleString().substr(0,10));

//Q2 print the current year only
console.log(new Date().getFullYear());

//find if its PM OR AM
if(new Date().getHours()>=12){
    console.log("ITS PM NOW");
}
else{
    console.log("Its AM now");
}

//Q4 print the day of your bday
let my_Bday=new Date(2004,5,2);
let days=["SUBDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
console.log(days[my_Bday.getDay()]);

//Q5 find your age
let age = (new Date().getTime()-my_Bday.getTime())/(1000*60*60*24*365);
console.log("Your age is :", Math.round(age));

//Q6 convert(1640995200000) into readabl;e time stamp
console.log(new Date(1640995200000).toLocaleDateString());

//Q7 Add 100 days to the current date and print that date
let today= new Date();
console.log("Today :",today.toLocaleDateString(),", AFTER 100 DAYS :",new Date(today.getFullYear(),today.getMonth(),today.getDate()+100).toLocaleDateString());

//Q8 find number of days between them
let d1 = new Date("2025-01-01");
let d2 = new Date("2025-02-15");

console.log("Number of days betweeen :", (d2.getTime()-d1.getTime())/(1000*60*60*24));

//Q9 find which date is earlier eg d1,d2
if(d1.getTime()<=d2.getTime()){
    console.log("D1 is earlier");
}
else{
    console.log("D2 is earlier");
}

//Q10 Create a countdown timer to a specific date (like New Year 2026).
let target= new Date(2026,0,1,0,0,0);
let x=target.getTime()-today.getTime();
console.log("CountDown : DAYS",Math.round(x/(1000*60*60*24)), "Hourse ",Math.round((x%(1000*60*60*24))/(1000*60*60)));


/*
There are basicaly 3 types of variable declaration const , let and var and no type
const - keeps the value constant , throws error if changed anywhere
let - dynamic varibale with local scope {}
var - dynamic variable with global scope (recommended not to use)
*/

const Account_ID="B23312";   //this to be kept unchanged if tried to change throws errror
let Name = "Deepak"
var Branch = "EP"
Gender = "Male"   //Declaring wihtout a type = declaring with var type (Global) 
let CGPA;        //If not value is assigned then default value is "UNDEFINED" which is different from NULL
let SGPA=null    //null means the empty_ness that the developer choose to show that this thing is empty by choice


console.table([Account_ID,Name,Branch,Gender]); //dislpays output in the tabular format easy to read and print


/*local scope of let/const -  The lat/const declared in local_scope stays local and doesn't change the global state
while "var" is a global variable changing it anywhere inside or outside of local scope changese the global_state thus NOT RECOMENDED TO USE
*/
{
    let Name="RAJ";
    var Branch = "CSE"
    console.log("\n let & var variable changes in the local scope")
    console.table([Account_ID,Name,Branch,Gender,CGPA,SGPA]);

    let crush="KS";
    var happy=true;
}

//Note - let Name remains the same here as global while the branch got changed
console.table([Account_ID,Name,Branch,Gender,CGPA,SGPA]);

// console.log(crush) -> This throws error as the crush is a local var its not defined for this scope

//As happy was declared using var(global_var) thus its defined in entire scope 
console.log("ARE YOU HAPPY?" ,happy)







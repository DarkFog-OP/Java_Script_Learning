//THESE ARE THE BASICS PRACTICE QUESTIONS FOR STRINGS



/*
Q.1 Reversse a string

let str="JavaScript";
str.length;

function reverse_str(str){
    let new_str="";
    for(let i=str.length-1;i>=0;i--){
        new_str+=str[i];
    }
    console.log(new_str);
}

reverse_str(str);
*/

//Q.2 Count the number of vowels

// let str="javAscript";
// let count=0;

// str=str.toLowerCase();

// for(let i=0;i<str.length;i++){
//     if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
//         count++;
//     }
// }

// console.log(count);



//Q.3 Count the number of consonents

// let str="javAscript ";
// let count=0;

// str=str.toLowerCase();

// for(let i=0;i<str.length;i++){
//     if(str[i]!='a' && str[i]!='e' && str[i]!='i' && str[i]!='o' && str[i]!='u' && str[i]>="a" && str[i]<="z"){
//         count++;
//     }
// }

// console.log(count);



// Q.4 Count the number of words in it;

// let str = "  Hello   world this  is   JavaScript  deepak is great      dsa asd ";
// let count=0;
// let is_newWord=true;

// for(let i=0;i<str.length;i++){
//     if(str[i]==' '){
//         is_newWord=true;
//     }
//     else if(is_newWord===true){
//         count++;
//         is_newWord=false;
//     }
// }

// console.log(count);


//Q.5 Return the first non repeating char in string

// let s="swwiiss";

// let idx=0;
// let char_found=false;

// while(char_found===false){
//     let char=s[idx];
//     let count=0;
//     for(let i=0;i<s.length && count<2;i++){
//         if(s[i]===s[idx]){
//             count++
//         }
//     }

//     if(count===1){
//         console.log("FIRST NON REPEATING CHAR IS : ",s[idx]);
//         char_found=true;
//     }
//     else if(idx==s.length-1){
//         console.log("Nahi mila bhai kuch");
//     }

//     idx++;
// }

// Q.6 Palindrome check

// let s="MISSIqM";

// let len=s.length;
// let Is_Palindrome=true;

// for(let i=0;i<len/2;i++){
//     if(s[i]!=s[len-1-i]){
//         console.log("THE WORD IS NOT A PALINDROME");
//         Is_Palindrome=false;
//         break;
//     }
// }

// if(Is_Palindrome==true){
//     console.log("THE WORD IS A PALINDROME : mission succesfull");   
// }


//Q.7 Are Anagrams
// let s1="silent"; let s2="listen";

// let areAnagram=true;

// if(s1.length!=s2.length){
//     areAnagram=false;
// }

// let l=s1.length;

// for(let i=0;i<l && areAnagram==true;i++){
//     let count=0;
//     for(let j=0;j<l;j++){
//         if(s1[j]==s1[i]){
//             count++;
//         }
//         if(s2[j]==s1[i]){
//             count--;
//         }
//     }
//     if(count!=0){
//         areAnagram=false;
//     }
// }

// if(areAnagram==true){
//     console.log("THE GIVEN WORDS ARE ANAGRAMS");
// }
// else{
//     console.log("THE GIVEN WORDS ARE NOT ANAGRAMS");
// }


//Q8 Remove all duplicate characters from a string (keep only first occurrence).

// let s="bannnanas";
// let res="";
// let visited={};

// for(let i=0;i<s.length;i++){
//     if(visited[s[i]]==undefined){
//         visited[s[i]]=true;
//         res+=s[i];
//     }
// }

// console.log(res);
//QUESTION 1: take one input as number, if that number is a multiple of 3 then print "Humpty". if the number is a multiple of 5 then print "Dumpty". if the number is a multiple of 3 and 5, print "humpty dumpty"

// let n = 15;
// if(n%3==0 && n%5==0){
//     console.log("humpty dumpty");
// } else if (n%3==0){
//     console.log("humpty");
// }else if(n%5==0){
//     console.log("dumpty");
// }

// QUESTION 2: you have one string which is str = "we are in full stack batch". In this string you need to get all vowels and make one word out of it and print it. OUTPUT should be = eaeiuaa

// let str = " we are in full stack batch";
// let output = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//         output += str[i]; 
//     }

//     console.log(output);
// }

let num=10;
while(num<10){
    console.log("while loop is running");
    num++;
}

//FOR OF loop is specifically for arrays only

// let arr =[1,2,3,4,5,6,7,8,9]
// for(let num of arr){
//     console.log(num);   
// }

// let arr1=["danoh","sol","sunny"]
// for(let names of arr1){
//     if (names == "sol"){
//         console.log("lovely runner");
//     } else{
//         console.log("extraordinary you");
//     }
    
// }

//FOR IN loop, this loop is specifically used in objects

obj={
    name:"danoh",
    course:"manhua",
    uni:"YU",
    year:4
}

for(let i in obj){
    console.log(obj[i]);
}
for(let i in obj){
    console.log(typeof i); //by default, all the keys become string
}


// Q: find which subject has max marks along with sub name
let obj1 = {
    math:70,
    english:80,
    science:90,
    philosophy:90
}

let max = 0;
let sub=" "

for (let i in obj1){
    if(obj1[i] > max){
        max = obj1[i];
        sub=i 
    }
}

console.log(sub, max);


// FUNCTIONS (it can be called anywhere even before it is defined)

function myFunction(a,b,c){
    let output = a+b+c;
    console.log(output);
}

myFunction(10,20,30) //invoking the function
myFunction(112.290,20763,70) 

// ES6: Ecma script 6, commonJS
// let, const, arrow function

const arrowfunc = (a,b,c) =>{
    let output = a+b+c;
    console.log(output);
}

arrowfunc(10,20,30)

let batch = "fs"
console.log(batch);

// console.log(batch);
// var batch ="fs";


// // let, const, var

let firstname="jane";
let lastname="doe";
console.log(firstname," "+ lastname); //concatenation


console.log(typeof name);



// // let num1=20;
// // let num2=40;

// // let sum=num1+num2;
// // console.log(sum);

// // console.log(typeof num);

// // let num=4.5;
// // console.log(typeof num1);

// // let bool=true;
// // console.log(typeof bool);

// // equal == or ===, not equal != orr !==, less than, greater than, less than equal, greater than equal
// // == checks only the value, it doesnt take data type into account
// // === it strictly checks; considers both the value and the data type

// //COMPARISON OPERATORS
// let num1="20";
// let num2=20;

// console.log(num1==num2);
// console.log(num1===num2);

// console.log(num1>=num2);
// console.log(num1<=num2);

// console.log(num1!=num2);
// console.log(num1!==num2);






// //IF, ELSE, ELSE IF
// if(num1>num2){
//     console.log("NUM 1 WINS");
// }else if(num1<num2){
//     console.log("NUM 1 LOSES");
// }else{
//     console.log("NOBODY WINS")
// }

//string, number, boolean, object, array, function, null, undefined
// null means nothing is there, undefined means value is not assigned

console.log(typeof null); 
console.log(typeof undefined);

console.log(undefined==undefined);
console.log(null==null);

console.log(null==undefined);
console.log(null===undefined);

//arr can store values of various datatypes
let arr =[1,"name",3.4, true, false, null, undefined, [1,2,3]];
lastindex=console.log(arr.length-1);
console.log(lastindex);

console.log(arr.length);
// indexes are addresses for each element

arr.push(9090) //to add any element at the end
console.log(arr);

arr.pop() //removes the last element
console.log(arr);

console.log(arr[arr.length-1]);
arr[3]=18;
console.log(arr);

arr[0]="myname is name"
console.log(arr);


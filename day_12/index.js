// // // TASK : you will be having one object of products with product name and product price, you need to find out the final price of each product at a certain discount
// // // discount if 15% on each product

// // // find the final price of each product after discount in certain relevent data structure

// // // let products = {
// // //     laptop: 70000,
// // //     phone: 50000,
// // //     mobilecover: 1000,
// // //     tablet: 40000
// // // }


// // // console.log(window.alert("HELLO FROM THE OTHER SIDE"));


// // // const para = document.getElementById("para")
// // // para.innerText="i am a paragrpah text from JS file";


// // // console.log(para);




// // // // css using js

// // const para = document.getElementById("para");

// // para.innerText = "i am paragraph text from js file";
// // para.style.border = "1px solid green";
// // prara.style.backgroundcolor = "pink";
// // para.style.color = "white";

// // const btn = document.getElementById("button");
// // btn.innerText = "click me .......";
// // const btnDiv = document.getElementById("btn");

// // btn.style.padding = "10px";
// // btn.style.border = "none";
// // btn.style.backgroundColor = "olive";
// // btn.style.color = "white";
// // btn.style.borderRadius = "5px";

// // btnDiv.append(btn);


// // const myFUN=()=>{
// //     console.log("output after clicking");

// // }

// // btn.addEventListener(myFUN)



// let form = document.getElementById("form")



// form.addEventListener("submit", (e) => {
//     e.preventDefault(); // IMPORTANT for form

//     let fullName = document.getElementById("fullName").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     let obj = {
//         fullName, email, password
//     }

//     console.log(obj);

// })



// obje={
//     name="oliv",
//     uni:"adtu",
//     myfuni:()=>{
//         console.log(this.window);
//     }
// }

// obj.myfuni()


//SIRS CODE

// const para = document.getElementById("para");


// para.innerText="I am paragraph text from JS file";
// para.style.border="1px solid red"
// para.style.backgroundColor="teal"
// para.style.color="white"


// const btnDiv = document.getElementById("btn");
// const btn = document.createElement("button");
// btn.innerText="Click Me..!!";
// btn.style.padding="10px";
// btn.style.border="none";
// btn.style.backgroundColor="yellowgreen";
// btn.style.color="white";
// btn.style.borderRadius="5px"
// btnDiv.append(btn)




// btn.addEventListener("click",()=>{
//     console.log("clicked inside eventListener")
// })



// let form = document.getElementById("form");
// let btn = document.getElementById("btn");



// form.addEventListener("submit", (e)=>{
//     e.preventDefault();


//     let fullName = document.getElementById("fullName").value;
//     let email= document.getElementById("email").value;
//     let password = document.getElementById("password").value;


//     let obj = {
//         fullName, email, password
//     }


//     console.log(obj);


// })


obj = {
    name:"Arpan",
    uni:"ADTU",
    myFun:function(){
        console.log(this.name)
    }
}



obj.myFun()








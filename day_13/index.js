let form = document.getElementById("form");
let btn = document.getElementById("btn");


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let fullname=document.getElementById("fullname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let obj = {
        fullname, email, password
    }

    let arr=JSON.parse(localStorage.getItem("userData"))|| [];
    arr.push(obj)

    localStorage.setItem("userData",JSON.stringify(obj));

    // let dataFromLocalStorage=localStorage.getItem("userdata")


    // console.log(dataFromLocalStorage);
    


})


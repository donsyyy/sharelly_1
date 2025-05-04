const signin = document.querySelector("#btnin"); 
const signup = document.querySelector("#btnup");
const container = document.querySelector(".container"); 

signup.addEventListener("click", () => {
    container.classList.add("signin_mod");
});

signin.addEventListener("click", () => {
    container.classList.remove("signin_mod"); 
});


user = document.querySelector("#user");
pass = document.querySelector("#pass");
signin_btn = document.querySelector("#btnlogin");

signin_btn.addEventListener("click", ()=>{
    if(user.value==="med"){
        console.log("it is correct");
    }
})

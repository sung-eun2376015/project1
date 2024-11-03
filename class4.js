const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link=document.querySelector("a");

function onSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem("username",loginInput.value);
    paintGreeting();

}

function paintGreeting(){
    const username=localStorage.getItem("username");
    greeting.innerText=`hello ${username}`;
    greeting.classList.remove("hidden");

    
}

// function handleLinkClick(event){
//     event.preventDefault();
// }

// link.addEventListener("click",handleLinkClick);

const savedUsername=localStorage.getItem("username");

if (savedUsername===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onSubmit);
}else{
    paintGreeting(savedUsername);
}
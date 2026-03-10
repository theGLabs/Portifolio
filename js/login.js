document.addEventListener("DOMContentLoaded", () => {

const loginIcon = document.getElementById("login");
const loginPanel = document.getElementById("login-panel");
const closeLogin = document.getElementById("close-login");

const loginBox = document.getElementById("login-box");

const signupPanel = document.getElementById("signup-panel");
const resetPanel = document.getElementById("reset-panel");

const signupLink = document.getElementById("signup-link");
const forgotLink = document.getElementById("forgot-link");


// abrir login
if(loginIcon){
loginIcon.onclick = ()=>{
loginPanel.classList.add("open");
};
}


// fechar login
if(closeLogin){
closeLogin.onclick = ()=>{
loginPanel.classList.remove("open");
signupPanel.classList.remove("open");
resetPanel.classList.remove("open");
loginBox.style.display = "flex";
};
}


// CRIAR CONTA
if(signupLink){
signupLink.onclick = (e)=>{
e.preventDefault();

loginBox.style.display = "none";

signupPanel.classList.add("open");
resetPanel.classList.remove("open");
};
}


// RECUPERAR SENHA
if(forgotLink){
forgotLink.onclick = (e)=>{
e.preventDefault();

loginBox.style.display = "none";

resetPanel.classList.add("open");
signupPanel.classList.remove("open");
};
}


// FECHAR PAINEIS
const closeSignup = document.querySelector(".close-signup");
const closeReset = document.querySelector(".close-reset");

if(closeSignup){
closeSignup.onclick = ()=>{
signupPanel.classList.remove("open");
loginBox.style.display = "flex";
};
}

if(closeReset){
closeReset.onclick = ()=>{
resetPanel.classList.remove("open");
loginBox.style.display = "flex";
};
}


// VOLTAR PARA LOGIN
document.querySelectorAll(".back-login").forEach(el=>{

el.onclick = ()=>{

signupPanel.classList.remove("open");
resetPanel.classList.remove("open");

loginBox.style.display = "flex";

};

});


// LOGIN GLOBAL
const btnLogin = document.getElementById("btn-login");

if(btnLogin){

btnLogin.onclick = ()=>{

const email = document.getElementById("email-login").value;

if(email){

localStorage.setItem("usuarioLogado", email);

alert("Login realizado!");

location.reload();

}

};

}


// VERIFICAR LOGIN SALVO
const usuario = localStorage.getItem("usuarioLogado");

if(usuario){

if(loginIcon){
loginIcon.innerHTML = "👤";
}

}

});
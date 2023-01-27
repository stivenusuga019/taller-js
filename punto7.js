let password = document.querySelector("#psw");
let mensaje = document.querySelector("#message");
let mayuscula = document.querySelector("#capital");
let minuscula = document.querySelector("#letter");
let numero = document.querySelector("#number");
let caracteres = document.querySelector("#length");
console.log(password);
password.addEventListener("focus",function(){
    //console.log("estoy el la contraseña");
    mensaje.style.display="block"
})
password.addEventListener("blur",function(){
   // console.log("sali de la contraseña");
   mensaje.style.display="none"
})

let mayus = /[A-Z]/g;
let minus = /[a-z]/g;
let num = /[0-9]/g;

password.addEventListener("keyup",function(){
    //console.log(password.value);
    if ( password.value.match(mayus) ) {
        mayuscula.classList.add("valid");
        mayuscula.classList.remove("invalid");
    }else{
        mayuscula.classList.remove("valid");
        mayuscula.classList.add("invalid");
    }
    if ( password.value.match(minus) ) {
        minuscula.classList.add("valid");
        minuscula.classList.remove("invalid");
    }else{
        minuscula.classList.remove("valid");
        minuscula.classList.add("invalid");
    }
    if ( password.value.match(num) ) {
        numero.classList.add("valid");
        numero.classList.remove("invalid");
    }else{
        numero.classList.remove("valid");
        numero.classList.add("invalid");
    }
    //Minimo de Caracteres
    if (password.value.length >=8 && password.value.length <=20 ) {
        caracteres.classList.add("valid");
        caracteres.classList.remove("invalid"); 
    }
    else{
        caracteres.classList.remove("valid");
        caracteres.classList.add("invalid");
    }
})
let boton = document.querySelector(".openbtn");
let menu = document.querySelector(".sidebar");
boton.addEventListener("click",()=>{
    menu.style.left="0px";
})
let x = document.querySelector(".closebtn");
x.addEventListener("click",()=>{
    menu.style.left="-200px";
})

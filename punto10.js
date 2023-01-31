 //menu
 let menu = document.querySelector("body div");
 
//boton
 let boton = document.querySelector("#myBtn");

 
window.document.addEventListener('scroll', function(){
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 1500) {
        boton.style.display = "block";
        menu.style.background = "red"
    }else{
        boton.style.display = "none"
        menu.style.background = "black"
    }
    
})

boton.addEventListener("click",() =>{
   window.scrollTo({top: 0,
    behavior: "smooth"});
})

 
   
 

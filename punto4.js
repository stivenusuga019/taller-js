let acordeon = document.querySelectorAll(".accordion");
let panel = document.querySelectorAll(".panel")
for (let i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener("click",()=>{

        if(panel[i].style.display === "block"){
            panel[i].style.display="none";
        }else{
            panel[i].style.display="block"
        }
       
    })
    
}
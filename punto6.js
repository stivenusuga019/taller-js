let selector = document.querySelector(".nieve");

selector.addEventListener("change",(event)=>{
    let cualS = document.querySelector(".resultado");
    cualS.textContent=`Te gusta el sabor :${event.target.value}`;
    }
    )
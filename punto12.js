document.addEventListener("DOMContentLoaded", function () {
    EliminarTareas();
})
//Agregar boton eliminar
function EliminarTareas() {
    let tareas = document.querySelectorAll("#myUL li");
for (let i = 0; i < tareas.length; i++) {
    let eliminar = document.createElement("span");
    let texto = document.createTextNode("x");
    eliminar.appendChild(texto);
    eliminar.setAttribute("class","close");
    tareas[i].appendChild(eliminar);
}
elimi();
}


//eliminar una tarea de la lista
function elimi() {
    let eliminar =  document.querySelectorAll(".close"); 
for (let i = 0; i < eliminar.length; i++) {
  eliminar[i].addEventListener("click",function(){
    let tareaEliminada = this.parentElement;
    tareaEliminada.remove();
    //tareaEliminada.style.display="none"
  })   
}
}
//agregar nueva tarea
function tareaNueva() {
    let li = document.createElement("li");
    let texto = document.querySelector("#myInput");
    let txt = document.createTextNode(texto.value);
    li.appendChild(txt);
    let listado = document.querySelector("#myUL");
    if (texto === "") {
        alert("Debe escribir una tarea")
    }else{
        listado.appendChild(li);
        EliminarTareas();
        texto.value = "";
    }
    

}
let boton = document.querySelector(".addBtn");
boton.addEventListener("click",tareaNueva);
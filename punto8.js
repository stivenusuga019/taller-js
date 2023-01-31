var cargos = {
    "Front-end": {
      "HTML": ["Links", "Images", "Tables", "Lists"],
      "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
      "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]    
    },
    "Back-end": {
      "PHP": ["Variables", "Strings", "Arrays"],
      "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
  }
  
  let selectCargos = document.querySelector("#cargos");
  let selectLenguajes = document.querySelector("#lenguajes");
  let selectHabilidades = document.querySelector("#habilidades");

for (const x in cargos) {
    selectCargos.options[selectCargos.options.length] = new Option(x, x);
    //selectCargos.options[selectCargos.options.length] = selectCargos.innerHTML=`<option value="${x}">${x}</option>`
}

selectCargos.addEventListener("change",function() {
    selectLenguajes.length = 1;
    for (let y in cargos[this.value]) {
        selectLenguajes.options[selectLenguajes.options.length] = new Option(y, y);
    }
})
selectLenguajes.addEventListener("change",function() {
    selectHabilidades.length = 1;
    let z = cargos[selectCargos.value][this.value];
    for (let i = 0; i < z.length; i++) {
        selectHabilidades.options[selectHabilidades.options.length] = new Option(z[i],z[i]);
    }
})




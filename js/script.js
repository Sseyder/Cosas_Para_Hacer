
//APRETANDO LA TECLA ENTER SE PUEDEN INGRESAR LOS DATOS O HACIENDO CLICK EN EL BOTON
document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        const input = document.querySelector("#input");
        addItem(input.value);
    }
      
  });
  
    document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
  });
  

    //SE CREAN LAS CONSTANTES DE CADA UNOS DE LOS ELEMENTOS INGRESADOS
    addItem = (input) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const text = document.createElement("p"); 
  
    item.className = "item";
    text.textContent = input;
  
    //AL HACER CLICK EN EL ICONO DE CHECKBOX ESTA MISMA SE PINTARA DE VERDE
    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", () => {
      checkIcon.style.color = "limegreen";
    })
    div.appendChild(checkIcon);
  
    //AL HACER CLICK EN EL TACHO DE BASURA SE ELIMINARA EL ELEMENETO CLICKEADO
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", () => {
      item.remove();
    })

    div.appendChild(trashIcon);
  
    item.appendChild(text);
    item.appendChild(div);
  
    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";
  }
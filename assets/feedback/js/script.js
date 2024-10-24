function myFunction(x) {
    x.classList.toggle("change");
  }


const menu = document.getElementById("listId");
const button = document.getElementById("buttonId");


button.addEventListener("click", (event) => {

    if(menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

}) 

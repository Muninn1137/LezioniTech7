
/*const elementH1Id = document.querySelector("#Title")
const elementH1Class = document.querySelector(".Title")

console.log(elementH1Id)
console.log(elementH1Class)

console.log(elementH1Class.style)

console.log(elementH1Class.getBoundingClientRect())*/

const elementButtonMenu = document.querySelector("#buttonMenu")  // questi due per chiamare il bottone
console.log (elementButtonMenu);

const elementSideBar = document.querySelector("#sideBar");
console.log (elementSideBar);

elementButtonMenu.addEventListener("click", () => {  //Questo aggiunge l'ascoltatore e l'evento al bottone
    console.log("Ho cliccato");
   // elementSideBar.style.left = 0;  
   elementSideBar.classList.add("open") // Qyesto è il metodo bello, permette di aggiungere temporaneamnete una classe ad un marker.
})
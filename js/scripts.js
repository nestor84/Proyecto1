let boton = document.querySelector(".button");
let navbar = document.querySelector(".nav");

const mostrarMenu = () => {
    navbar.classList.toggle("activo");

}

boton.addEventListener("click", mostrarMenu);
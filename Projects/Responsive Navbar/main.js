const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector("nav ul")
const list = document.querySelector("nav ul li")

hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("open")
}
)
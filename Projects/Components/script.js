const colorInput = document.querySelector("input[type=color]");
const colorVariable = "--clr-accent";

colorInput.addEventListener("change", (e) => {
  //console.log(e.target.value)
  document.documentElement.style.setProperty(colorVariable, e.target.value);
});

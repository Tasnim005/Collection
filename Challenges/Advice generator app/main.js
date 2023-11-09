const adviceID = document.getElementById("adviceID");
const advice = document.getElementById("advice");
const dice = document.querySelector(".dice");


fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    adviceID.textContent = `ADVICE # ${data.slip.id}`;
    advice.textContent = `"${data.slip.advice}"`;
  });

dice.addEventListener("click", newAdvice);

function newAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceID.textContent = `ADVICE # ${data.slip.id}`;
      advice.textContent = `"${data.slip.advice}"`;
    });
}

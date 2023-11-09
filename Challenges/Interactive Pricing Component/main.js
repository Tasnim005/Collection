const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const range = document.getElementById("range");
const rate = document.querySelector(".rate");
const price = document.querySelector(".price");

function updatePrice() {
  const basePrice = range.value;
  let finalPrice = basePrice;

  if (circle.classList.contains("clicked")) {
    finalPrice = basePrice * 0.75;
  }

  price.textContent = `$${finalPrice}`;
}

range.oninput = function () {
  rate.textContent = `${range.value * 6.25}K PAGEVIEWS`;

  updatePrice();
};

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  circle.classList.toggle("clicked");
  updatePrice();
});

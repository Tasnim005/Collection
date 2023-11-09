const range = document.getElementById("myRange");
const output = document.getElementById("demo");
const message = document.getElementById("message");

output.innerHTML = range.value; // Display the default range value
message.innerHTML = range.value

// Update the current range value (each time you drag the range handle)
range.oninput = function () {
  output.innerHTML = 1000-this.value;
  message.innerHTML = range.value
};
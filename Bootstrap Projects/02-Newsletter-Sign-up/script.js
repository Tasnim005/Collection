// const form = document.querySelector("form");

//       form.addEventListener("submit", (e) => {
//         if (!form.checkValidity()) {
//           e.preventDefault();
//         }

//         form.classList.add("was-validated");
//       });

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the default form submission

  if (form.checkValidity()) {
    // If the form is validated, show the modal
    showSuccessModal();
  }

  form.classList.add("was-validated");
});

function showSuccessModal() {
  const modal = new bootstrap.Modal(document.getElementById("modal1"));

  modal.show();

  // Event listener for when the modal is hidden
  modal.addEventListener("hidden.bs.modal", function () {
    // Reset the form and remove the "was-validated" class
    form.reset();
    form.classList.remove("was-validated");
  });
}

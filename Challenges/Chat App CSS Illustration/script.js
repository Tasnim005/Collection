document.addEventListener("DOMContentLoaded", function () {
    const chats = document.querySelector('article').children
    const elementsArray = Array.from(chats);

    // // Function to show each child with a delay
    function showChildrenWithDelay(index) {
      if (index < elementsArray.length) {
        elementsArray[index].classList.remove("hidden");
        setTimeout(function() {
          showChildrenWithDelay(index + 1);
        }, 700); // Adjust the delay (in milliseconds) as needed
      }
    }

    // Initially hide all children
    elementsArray.forEach((element)=>{
        element.classList.add("hidden");
    });

    // // Start showing children with a delay
    showChildrenWithDelay(0);
});
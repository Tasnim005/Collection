// JavaScript to control the transition
window.addEventListener("load", function() {
    // Simulate a delay (you can replace this with actual loading time)
    setTimeout(function() {
        // Hide the loading screen and reveal the main content
        document.getElementById("loading-screen").style.display = "none";
    }, 3000); // This is a 2-second delay; replace with your actual load time
});


 // Define the target path and set its initial state
 const paths = document.querySelectorAll('.animatePath');
paths.forEach((path)=>{
  path.style.strokeDasharray = path.getTotalLength();
  path.style.strokeDashoffset = path.getTotalLength();

   // Use anime.js to animate the path drawing
 anime({
  targets: path,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine', // Choose the easing function you prefer
  duration: 3000, // Animation duration in milliseconds
  direction: 'alternate',
  loop: true
});
})


// Google Search
const references = document.querySelectorAll('.reference')

references.forEach((item) => {
  const searchString = item.innerText

  item.addEventListener('click', openNewPage)

  function openNewPage() {
    // Encode the text for a Google search URL
    const encodedText = encodeURIComponent(searchString);

    // Create a Google search URL
    const googleSearchURL = `https://www.google.com/search?q=${encodedText}`;

    // Open the URL in a new tab
    window.open(googleSearchURL, '_blank');
  }
})

// Dark Mode
const themeSwitch = document.querySelector('.themeSwitch')

themeSwitch.addEventListener('click', changeTheme)

function changeTheme(){
  document.body.classList.toggle('darkmode')
}
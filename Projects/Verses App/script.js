// JavaScript to control the transition
window.addEventListener("load", function() {
    // Simulate a delay (you can replace this with actual loading time)
    setTimeout(function() {
        // Hide the loading screen and reveal the main content
        document.getElementById("loading-screen").style.display = "none";
    }, 2000); // This is a 2-second delay; replace with your actual load time
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
  duration: 2000, // Animation duration in milliseconds
  direction: 'alternate',
  loop: true
});
})



const slides = document.querySelectorAll('.slide')

const prevButton = document.querySelectorAll('.backward');
const nextButton = document.querySelectorAll('.forward');

let i = 0;

// Initially, apply the 'active' class to the first testimonial
slides[i].classList.add('active');

nextButton.forEach((item) => {
    item.addEventListener('click', forward);
})

prevButton.forEach((item) => {
    item.addEventListener('click', backward);
})



function forward() {
    // Remove 'active' class from the current testimonial
    slides[i].classList.remove('active');
    i++;

    // Check if index is out of bounds and reset it to 0 if necessary
    if (i >= slides.length) {
        i = 0;
    }

    // Add 'active' class to the next testimonial
    slides[i].classList.add('active');
}

function backward() {
    // Remove 'active' class from the current testimonial
    slides[i].classList.remove('active');
    i--;

    // Check if index is out of bounds and set it to the last testimonial if necessary
    if (i < 0) {
        i = slides.length - 1;
    }

    // Add 'active' class to the previous testimonial
    slides[i].classList.add('active');
}

// Bookmark Section

document.addEventListener('DOMContentLoaded', loadBookmarks);

const add = document.getElementById('add');
const surahNo = document.getElementById('surahNo');
const verseNo = document.getElementById('verseNo');

add.addEventListener('click', () => {
    const surahValue = surahNo.value;
    const verseValue = verseNo.value;

    if (surahValue && verseValue) {
        fetchVerse(surahValue, verseValue);
    } else {
        alert('Please enter both Surah and Verse numbers.');
    }
});

async function fetchVerse(surah, verse) {
    try {
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${verse}/editions/quran-uthmani,en.asad`);
        const data = await response.json();

        console.log(data);

        const arabic = data.data[0].text;
        const english = data.data[1].text;
        const surahName = data.data[0].surah.englishName;
        const verseNumber = data.data[0].numberInSurah;

        addBookmarkToDOM(arabic, english, surahName, verseNumber);
        saveBookmark(surah, verse, arabic, english, surahName, verseNumber);

        // Clear input fields
        surahNo.value = '';
        verseNo.value = '';
    } catch (error) {
        console.error('Error:', error);
    }
}

function addBookmarkToDOM(arabic, english, surahName, verseNumber) {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const arabicText = document.createElement('p');
    arabicText.className = 'arabicText';
    arabicText.innerText = arabic;
    wrapper.appendChild(arabicText);

    const engText = document.createElement('p');
    engText.className = 'engText';
    engText.innerText = english;
    wrapper.appendChild(engText);

    const reference = document.createElement('p');
    reference.classList = 'reference';
    reference.innerText = `Surah ${surahName}; Verse ${verseNumber}`;
    wrapper.appendChild(reference);

    document.querySelector('.bookmark').appendChild(wrapper);
}

function saveBookmark(surah, verse, arabic, english, surahName, verseNumber) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push({ surah, verse, arabic, english, surahName, verseNumber });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.forEach(bookmark => {
        addBookmarkToDOM(bookmark.arabic, bookmark.english, bookmark.surahName, bookmark.verseNumber);
    });
}


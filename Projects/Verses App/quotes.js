// Add Quotes
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js';
import { app } from './firebase-config.js';

const firestore = getFirestore(app);
const auth = getAuth(app);

// Function to upload a quote to Firestore under userID with imageURL
async function uploadQuoteToFirestore(userID, quoteText, imageURL) {
    const userQuotesRef = collection(firestore, `database/${userID}/userQuotes`);
    const newQuote = { quoteText, imageURL };

    try {
        await addDoc(userQuotesRef, newQuote);
        // No need to call addQuoteToDOM here
    } catch (error) {
        console.error('Error adding quote:', error);
    }
}


// Fetch and display existing quotes after authentication
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const userID = user.uid;
        const userQuotesRef = collection(firestore, `database/${userID}/userQuotes`);
        const querySnapshot = await getDocs(userQuotesRef);

        // Clear the DOM first to avoid duplication
        document.querySelector('.collection').innerHTML = '';

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            addQuoteToDOM(data.quoteText, data.imageURL); // Display the quote from Firestore
        });
    } else {
        console.log('User not authenticated');
    }
});

// DOM interaction to add new quotes
const add = document.getElementById('add');
const quote = document.getElementById('quote');

add.addEventListener('click', async () => {
    const quoteValue = quote.value;

    if (quoteValue) {
        try {
            const response = await fetch(`https://pixabay.com/api/?key=28972326-d4e9a2250d64e5c4a680ac22c&q=night&image_type=photo&per_page=100`);
            const data = await response.json();

            const randomIndex = Math.floor(Math.random() * 100)
            const imageURL = data.hits[randomIndex].largeImageURL

            addQuoteToDOM(quoteValue, imageURL)

            if (auth.currentUser) {
                uploadQuoteToFirestore(auth.currentUser.uid, quoteValue, imageURL);
            }
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    } else {
        alert('Please insert your quote');
    }
});

// Function to add quote to the DOM
function addQuoteToDOM(text, bgImage) {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    wrapper.style.backgroundImage = `url(${bgImage})`;

    const engText = document.createElement('p');
    engText.className = 'engText';
    engText.innerText = text;
    wrapper.appendChild(engText);

    document.querySelector('.collection').appendChild(wrapper);
}


// Carousel
const slides = document.querySelectorAll('.slide')

const prevButton = document.getElementById('left')
const nextButton = document.getElementById('right');

let i = 0;

// Initially, apply the 'active' class to the first testimonial
slides[i].classList.add('active');

// Automatically move slides every 8 seconds
const interval = 8000; // 8 seconds
setInterval(forward, interval);


nextButton.addEventListener('click', forward);
prevButton.addEventListener('click', backward);



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


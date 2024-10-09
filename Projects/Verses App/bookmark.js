import { getFirestore, doc, collection, addDoc, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js';
import { app } from './firebase-config.js';

// Initialize Firestore
const firestore = getFirestore(app);
const auth = getAuth(app);

// Function to upload a bookmark to Firestore under userID
async function uploadBookmarkToFirestore(userID, arabic, english, surahName, verseNumber) {
    const userBookmarksRef = collection(firestore, `database/${userID}/userBookmarks`);
    const newBookmark = { arabic, english, surahName, verseNumber };

    try {
        // Check if the bookmark already exists to avoid redundancy
        const querySnapshot = await getDocs(userBookmarksRef);
        let exists = false;
        querySnapshot.forEach(doc => {
            if (doc.data().surahName === surahName && doc.data().verseNumber === verseNumber) {
                exists = true;
            }
        });

        if (!exists) {
            await addDoc(userBookmarksRef, newBookmark);
            console.log('Bookmark added to Firestore');
            addBookmarkToDOM(arabic, english, surahName, verseNumber);  // Add to DOM only after Firestore confirms it's unique
        } else {
            console.log('This bookmark already exists in Firestore');
        }
    } catch (error) {
        console.error('Error adding bookmark:', error);
    }
}

// Fetch and display existing bookmarks after authentication
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const userID = user.uid;
        const userBookmarksRef = collection(firestore, `database/${userID}/userBookmarks`);
        const querySnapshot = await getDocs(userBookmarksRef);

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            addBookmarkToDOM(data.arabic, data.english, data.surahName, data.verseNumber);
        });
    } else {
        console.log('User not authenticated');
    }
});

// DOM interaction to add new bookmarks
const add = document.getElementById('add');
const surahNo = document.getElementById('surahNo');
const verseNo = document.getElementById('verseNo');

add.addEventListener('click', async () => {
    const surahValue = surahNo.value;
    const verseValue = verseNo.value;

    if (surahValue && verseValue) {
        try {
            const response = await fetch(`https://quranapi.pages.dev/api/${surahValue}/${verseValue}.json`);

            const data = await response.json();

            const arabic = data.arabic1;
            const english = data.english;
            const surahName = data.surahName;
            const verseNumber = data.ayahNo;


            if (auth.currentUser) {
                uploadBookmarkToFirestore(auth.currentUser.uid, arabic, english, surahName, verseNumber);
            }
        } catch (error) {
            console.error('Error fetching verse:', error);
        }
    } else {
        alert('Please enter both Surah and Verse numbers.');
    }
});

// Function to add bookmark to the DOM
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


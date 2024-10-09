import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, collection, addDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyBzbaTBWDLMPlfZlRLvRPoxjbLTCpmG6lA",
    authDomain: "test-aab4b.firebaseapp.com",
    projectId: "test-aab4b",
    storageBucket: "test-aab4b.appspot.com",
    messagingSenderId: "89994313168",
    appId: "1:89994313168:web:57060a33df4ee818d88dd5",
    measurementId: "G-0RJYT9GKF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore()

export { app, analytics, firestore };

//Paths in firestore should have an even no of elements always such as; collection, document and sub-collection so on.

//Absolute path
const specialOfTheDay = doc(firestore, 'dailySpecial/2024-10-09')
async function writeDailySpecial() {
    const docData = {
        description: 'A delicious Vanilla latte',
        price: 3.5,
        milk: 'Whole',
        vegan: false,
    }
    try {
        await setDoc(specialOfTheDay, docData, { merge: true })
        console.log('This value has been added to the database')
    } catch (error) {
        console.log(`I got an error! ${error}`)
    }
}

//Relative Path
const childDoc = doc(specialOfTheDay, 'orderHistory/totalSales')
// path equals 'dailySpecial/2024-10-09/orderHistory/totalSales'

//Add a new document without specifying document id
const ordersCollection = collection(firestore, 'orders')

async function addANewDocument() {
    const newDoc = await addDoc(ordersCollection, {
        customer: 'Arthur',
        order: 'Latte',
        totalCost: (100 + Math.floor(Math.random() * 400)) / 100,
    })

    console.log(`Your doc was created at ${newDoc.path}`)

}

// Fetching a document
async function readASingleDocument(){
    const mySnapshot = await getDoc(specialOfTheDay)

    if(mySnapshot.exists()){
        const docData = mySnapshot.data()
        console.log(`My data is ${JSON.stringify(docData)}`)
    }
}

// Listening to a document
function listenToADocument(){
    onSnapshot(specialOfTheDay, docSnapShot =>{
        if(docSnapShot.exists()){
            const docData = docSnapShot.data()
            console.log(`In realtime, docdata is ${JSON.stringify(docData)}`)
        }
    })
}

writeDailySpecial()
addANewDocument()
readASingleDocument()
listenToADocument()


console.log('hello there, firestore!')

//00:08:00
// https://firebase.google.com/docs/firestore/quickstart?authuser=0&hl=en#web_1
// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyALvHuKhzL-un1tvfS6qipYh1DdA9ecfi0",
  authDomain: "verse-app-25a02.firebaseapp.com",
  projectId: "verse-app-25a02",
  storageBucket: "verse-app-25a02.appspot.com",
  messagingSenderId: "768851787718",
  appId: "1:768851787718:web:b5ed2a959f45ef761d3cc7",
  measurementId: "G-65L5NV4ZMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics };

// console.log('Firebase initialized successfully'); // Add this to confirm initialization




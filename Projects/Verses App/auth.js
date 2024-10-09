// auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { app } from './firebase-config.js';  // Correct path to your config file

// Initialize Firebase Authentication
const auth = getAuth(app);

// Function to register a new user
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Function to sign in a user
export const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
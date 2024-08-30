// auth-logic.js
import { registerUser, signInUser } from './auth.js'; // Adjust path as needed
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

// Handle registration
document.getElementById('register-button').addEventListener('click', async () => {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  
  try {
    await registerUser(email, password);
    alert('Registration successful!');
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

// Handle login
document.getElementById('login-button').addEventListener('click', async () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  try {
    await signInUser(email, password);
    alert('Login successful!');
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

// Handle logout
document.getElementById('logout-button').addEventListener('click', async () => {
  const auth = getAuth();
  
  try {
    await signOut(auth);
    alert('Logged out successfully!');
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

// Handle authentication state changes
const auth = getAuth();
onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is signed in:', user);
    // Show logged-in state content or redirect to a different page
  } else {
    console.log('No user is signed in');
    // Show logged-out state content or prompt for login
  }
});

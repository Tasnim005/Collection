import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js';
import { registerUser, signInUser } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  let isLogin = true;

  const formTitle = document.getElementById('form-title');
  const authButton = document.getElementById('auth-button');
  const toggleMessage = document.getElementById('toggle-message');

  // Toggle function between login and register
  const toggleForm = () => {
    isLogin = !isLogin;

    if (isLogin) {
      formTitle.textContent = 'Sign in to Verse';
      authButton.textContent = 'Login';
      toggleMessage.innerHTML = 'No account? <a href="#" id="toggle-link">Create one</a>';
    } else {
      formTitle.textContent = 'Sign up for Verse';
      authButton.textContent = 'Register';
      toggleMessage.innerHTML = 'Already have an account? <a href="#" id="toggle-link">Login</a>';
    }
  };

  // Attach the toggle link listener only once
  document.getElementById('toggle-link').addEventListener('click', (e) => {
    e.preventDefault();
    toggleForm();
  });

  // Handle form submission for login or register
  authButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;

    try {
      if (isLogin) {
        await signInUser(email, password);
        alert('Login successful!');
        window.location.href = './index.html';
      } else {
        await registerUser(email, password);
        alert('Registration successful!');
        window.location.href = './index.html';
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  });
});

// Handle authentication state changes
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  const profileSection = document.getElementById('profile-section');
  const signinSection = document.getElementById('signin-section');
  const userEmail = document.getElementById('user-email');
  const avatar = document.getElementById('avatar');

  if (user) {
    // User is signed in
    profileSection.style.display = 'flex';  // Show profile section
    signinSection.style.display = 'none';  // Hide sign-in section
    userEmail.textContent = user.email;  // Display user's email
    avatar.textContent = String(user.email).split('')[0]
    // Now attach the logout event listener only when the user is logged in
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', async () => {
      try {
        await signOut(auth);
        alert('Logged out successfully!');
        window.location.href = './auth.html';
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    });
    
  } else {
    // User is signed out
    profileSection.style.display = 'none';  // Hide profile section
    signinSection.style.display = 'block';  // Show sign-in section
  }
});

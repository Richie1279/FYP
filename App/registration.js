// Replace the firebaseConfig object with the one from your Firebase project settings
const firebaseConfig = {
    apiKey: "AIzaSyDWBWCxhPblj61V0EcWl-hvQEGvG3f5UJM",
    authDomain: "smarthaul-7c251.firebaseapp.com",
    databaseURL: "https://smarthaul-7c251-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "smarthaul-7c251",
    storageBucket: "smarthaul-7c251.appspot.com",
    messagingSenderId: "489108636040",
    appId: "1:489108636040:web:d69d8fa541258c5cf7ba3d",
    measurementId: "G-SJYMCCZ2RN"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firebase Authentication service
  const auth = firebase.auth();
  
 // Function to create a new user with email and password
function registerUser(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('User registered:', userCredential.user);
        alert('User registered successfully');
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        alert('Registration failed: ' + error.message);
      });
  }
  
  // Listener to track user's authentication state
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('User is signed in:', user);
    } else {
      console.log('No user is signed in.');
    }
  });
  
  // Get form elements
  const registerForm = document.getElementById('registerForm');
 
  const logoutButton = document.getElementById('logoutButton');

  const returnToHomepageBtn = document.getElementById("returnToHomepage");

returnToHomepageBtn.addEventListener("click", () => {
  window.location.href = "Homepage.html";
});
  
  // Add event listeners
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.registerEmail.value;
    const password = event.target.registerPassword.value;
    registerUser(email, password);
  });
 
  
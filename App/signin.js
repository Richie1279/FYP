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
  
  // Function to sign in an existing user with email and password
  function loginUser(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
        alert('User logged in successfully');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        alert('Login failed: ' + error.message);
      });
  }

  // Function to sign out the current user
  function logoutUser() {
    auth.signOut()
      .then(() => {
        console.log('User signed out');
        alert('User signed out successfully');
      })
      .catch((error) => {
        console.error('Logout failed:', error);
        alert('Logout failed: ' + error.message);
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

  const loginForm = document.getElementById('loginForm');
   
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;
    loginUser(email, password);
  });
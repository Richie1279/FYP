import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// this does not work

// Get form elements
const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');



// Initialize Firebase
// const firebaseConfig = {
//         apiKey: "AIzaSyDVrKPLkFsStEN3UjU1W-GJkPkXQbN-r9Y",
//         authDomain: "fyp23-63f33.firebaseapp.com",
//         projectId: "fyp23-63f33",
//         storageBucket: "fyp23-63f33.appspot.com",
//         messagingSenderId: "469415965908",
//         appId: "1:469415965908:web:f3470aacb3709461543741",
//         measurementId: "G-J66ZDNMR8X"
//       };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Get a reference to the users collection in Firestore
const db = firebase.firestore();
const usersRef = db.collection('users');

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

  // Get input values
  const userData = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  };

    // Register user with Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
    .then((userCredential) => {
      // Add user data to Firestore
      const user = userCredential.user;
      return usersRef.doc(user.uid).set({
        username: userData.username,
        email: userData.email
      });
    })
    .then(() => {
      console.log('User registered and data added to Firestore');
    })
    .catch((error) => {
      console.error(error);
    });
});


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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


const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', (event) => {
	event.preventDefault();
	
	
});

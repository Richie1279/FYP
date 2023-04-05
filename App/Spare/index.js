// Get a reference to the login form
var loginForm = document.getElementById('login-form');

// Add an event listener to the form
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the user's email and password from the form
  var email = loginForm.email.value;
  var password = loginForm.password.value;

  // Use Firebase Authentication to sign in the user
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // If the user is signed in successfully, log them in and redirect to the dashboard page
      console.log('User is signed in');
      window.location.href = '/dashboard.html';
    })
    .catch(function(error) {
      // If there's an error signing in, display an error message
      console.error(error);
      alert('Failed to sign in. Please check your email and password and try again.');
    });
});

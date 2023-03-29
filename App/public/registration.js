import { auth, db } from "./firebase-init.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const signUpForm = document.getElementById("sign-up-form");
const signInForm = document.getElementById("sign-in-form");
const userInfo = document.getElementById("user-info");

// Sign up event listener
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["sign-up-email"].value;
  const password = signUpForm["sign-up-password"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error);
  }
});

// Sign in event listener
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["sign-in-email"].value;
  const password = signInForm["sign-in-password"].value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully:", userCredential.user);
  } catch (error) {
    console.error("Error signing in:", error);
  }
});

// Display user information when a user is authenticated
onAuthStateChanged(auth, (user) => {
    if (user) {
      userInfo.innerHTML = `Signed in as: ${user.email}`;
    } else {
      userInfo.innerHTML = "No user is signed in";
    }
  });
  
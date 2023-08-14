import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import {
    getAuth,
    CreateUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCgXUeIQYoqGvR4LYN8VOMwMgEqCBs6lmk",
    authDomain: "africa-e-voting-system.firebaseapp.com",
    projectId: "africa-e-voting-system",
    storageBucket: "africa-e-voting-system.appspot.com",
    messagingSenderId: "671749842174",
    appId: "1:671749842174:web:ff867f11a3b402e023f1af",
    measurementId: "G-NT7YJRGWMJ"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

const emailInput = document.getElementById("email");  
const passwordInput = document.getElementById("password"); 
const submit = document.getElementById("submit"); 

const signupEmailIn = document.getElementById("Email-signup");  
const cofirmSignupEmailIn = document.getElementById("confirm-email-signup"); 
const signupPasswordInput = document.getElementById("password-signup"); 
const cofirmSignupPasswordIn = document.getElementById("confirm-password-signup");

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signup = document.getElementById("sign-up");
const Return = document.getElementById("Retun-to-login");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

  createacctbtn.addEventListener("click", () => {
    var isVerified = true;
  
    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if (signupEmail != confirmSignupEmail) {
      window.alert("Email fields do not match. Try again.");
      isVerified = false;
    }
  
    signupPassword = signupPasswordIn.value;
    confirmSignUpPassword = confirmSignupPasswordIn.value;
    if (signupPassword != confirmSignUpPassword) {
      window.alert("Password fields do not match. Try again.");
      isVerified = false;
    }
  
    if (
      signupEmail == null ||
      confirmSignupEmail == null ||
      signupPassword == null ||
      confirmSignUpPassword == null
    ) {
      window.alert("Please fill out all required fields.");
      isVerified = false;
    }
  
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then(() => {
        window.alert("Success! Account Created");
        window.location = "./createTask.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
  
        // window.alert("Error Occurred. Try Again")
      });
  });
  
  submitButton.addEventListener("click", function () {
    email = emailInput.value;
    password = passwordInput.value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.alert("Success! Welcome Back");
        window.location = "./createTask.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
        // window.alert("Error Occurred. Try Again")
      });
  });
  
  signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacct.style.display = "block";
  });

signup.addEventListener("click", function (){
    main.style.display = "none";
    createacct.display = "block";
})

Return.addEventListener("click", function (){
    main.style.display = "block";
    createacct.display = "none";
})




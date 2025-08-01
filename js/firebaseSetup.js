// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, firebaseui } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBJmSPPpF5Wr2K77rVHEVnB-WDlOdYp25A",
authDomain: "insiit-blogs.firebaseapp.com",
projectId: "insiit-blogs",
storageBucket: "insiit-blogs.firebasestorage.app",
messagingSenderId: "125224944479",
appId: "1:125224944479:web:f3be4413220cdda129acea"
};


const auth = getAuth();
const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

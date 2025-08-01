import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics

// Add Firebase products that you want to use


const firebaseConfig = {
	apiKey: "AIzaSyBJmSPPpF5Wr2K77rVHEVnB-WDlOdYp25A",
	authDomain: "insiit-blogs.firebaseapp.com",
	projectId: "insiit-blogs",
	storageBucket: "insiit-blogs.firebasestorage.app",
	messagingSenderId: "125224944479",
	appId: "1:125224944479:web:f3be4413220cdda129acea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
auth.languateCode = 'en'
const provider = new GoogleAuthProvider


const button = document.querySelector('#login');

auth.onAuthStateChanged((user) => {
	if (user) {
		console.log(user)
		button.style.visibility = 'hidden'
	} else {
		button.style.visibility = 'visible'
	}
})







button.addEventListener('click', () => {
signInWithPopup(auth, provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});

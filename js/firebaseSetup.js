import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js'

const firebaseConfig = {
	apiKey: "AIzaSyBJmSPPpF5Wr2K77rVHEVnB-WDlOdYp25A",
	authDomain: "insiit-blogs.firebaseapp.com",
	projectId: "insiit-blogs",
	storageBucket: "insiit-blogs.firebasestorage.app",
	messagingSenderId: "125224944479",
	appId: "1:125224944479:web:f3be4413220cdda129acea"
}

const app = await initializeApp(firebaseConfig)
export default app

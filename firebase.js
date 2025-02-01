import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoqMSC_0ccOBvyJN8GNnaVROD8_cimWJw",  // Replace with your actual Firebase API key
    authDomain: "bmi-nexus.firebaseapp.com",
    projectId: "bmi-nexus",
    storageBucket: "bmi-nexus.appspot.com",
    messagingSenderId: "153104829761",
    appId: "1:153104829761:web:425cec5391f6711662e5c0"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase Auth and Firestore
export { auth, db, collection, addDoc, createUserWithEmailAndPassword };

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Initialize Firebase Authentication
const auth = getAuth();

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            console.log('Logged in as:', user.email);  // You can check this in the console
            
            // Redirect to the dashboard page
            window.location.href = 'dashboard.html';  // This will take you to the dashboard page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error: ${errorCode}, ${errorMessage}`); // Log the error

            // Handle the error (e.g., display error message to user)
        });
});

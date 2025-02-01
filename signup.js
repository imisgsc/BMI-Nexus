import { auth, db, collection, addDoc, createUserWithEmailAndPassword } from "./firebase.js";

// Handle form submission
document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const food = document.getElementById("food").value;

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Add user data to Firestore
        const usersCollection = collection(db, "users");
        await addDoc(usersCollection, {
            uid: user.uid,
            name: name,
            gender: gender,
            dob: dob,
            height: height,
            weight: weight,
            foodPreference: food,
            createdAt: new Date(),
        });

        alert("User registered successfully!");
        window.location.href = "login.html"; // Redirect to login page
    } catch (error) {
        console.error(error.message);
        alert("Error signing up: " + error.message);
    }
});

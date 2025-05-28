import { auth, createUserWithEmailAndPassword, signOut } from './firebase_user_init.js';

signOut(auth); // Avtomatik chiqish (agar oldingi session bo‘lsa)

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "profil.html";
    })
    .catch((error) => {
      alert("Signup error: " + error.message);
    });
});

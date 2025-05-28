import { auth, onAuthStateChanged } from './firebase_user_init.js';

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "profil.html";
  } 

signOut(auth); // Avtomatik chiqish (agar oldingi session bo‘lsa)

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "profil.html";
    })
    .catch((error) => {
      alert("Login error: " + error.message);
    });
});

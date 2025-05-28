import { auth, onAuthStateChanged, signOut } from './firebase_user_init.js';

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userId").textContent = user.uid;
  } else {
    window.location.href = "login.html";
  }
});

document.getElementById("logoutBtn").addEventListener("click", function() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
});

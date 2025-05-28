import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_OGVz9jay0ktj15LiA_GPiYMPGH0uHts",
  authDomain: "arbuz-dd73e.firebaseapp.com",
  projectId: "arbuz-dd73e",
  storageBucket: "arbuz-dd73e.firebasestorage.app",
  messagingSenderId: "685328913220",
  appId: "1:685328913220:web:094f61ed283a89f8207d11",
  measurementId: "G-LPCZ13VZ0D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };

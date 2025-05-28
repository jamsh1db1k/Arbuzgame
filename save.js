import { auth, db } from './firebase.js';
import {
  doc, updateDoc, getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function saveArbuzCount(arbuzCount) {
  const user = auth.currentUser;
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  await updateDoc(userRef, { arbuz: arbuzCount });
}

export async function loadArbuzCount() {
  const user = auth.currentUser;
  if (!user) return 0;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const data = userSnap.data();
    return data.arbuz || 0;
  } else {
    return 0;
  }
}
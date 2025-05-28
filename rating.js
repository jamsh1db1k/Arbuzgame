import { db } from './firebase.js';
import {
  collection, getDocs, query, orderBy, limit
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function getTopPlayers() {
  const q = query(collection(db, "users"), orderBy("arbuz", "desc"), limit(100));
  const querySnapshot = await getDocs(q);

  const players = [];
  querySnapshot.forEach(doc => {
    const data = doc.data();
    players.push({
      username: data.username || "Unknown",
      arbuz: data.arbuz || 0
    });
  });

  return players;
}
// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // <-- Firestore

const firebaseConfig = {
  apiKey: "TA_CLE_API",
  authDomain: "TON_DOMAINE.firebaseapp.com",
  projectId: "TON_PROJECT_ID",
  storageBucket: "TON_BUCKET.appspot.com",
  messagingSenderId: "TON_SENDER_ID",
  appId: "TON_APP_ID"
};

// Initialisation
const app = initializeApp(firebaseConfig);

// Services Firebase
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app); // <-- ajout Firestore

// Exports
export { auth, storage, db };

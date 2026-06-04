import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7omwMc0-Vi5kGOxFTbXwZ6x8yOh7MNF0",
  authDomain: "fish-with-legs.firebaseapp.com",
  projectId: "fish-with-legs",
  storageBucket: "fish-with-legs.firebasestorage.app",
  messagingSenderId: "576583982402",
  appId: "1:576583982402:web:4af427c5c601f4b4723cdb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

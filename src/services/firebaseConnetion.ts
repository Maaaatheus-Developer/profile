import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3KpkLFeOv9zhKXkVK1DuEcB23d9dJ0bg",
  authDomain: "reactlinks-b2438.firebaseapp.com",
  projectId: "reactlinks-b2438",
  storageBucket: "reactlinks-b2438.firebasestorage.app",
  messagingSenderId: "67408309787",
  appId: "1:67408309787:web:5d3ee23b84ef8eced2d2be",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };

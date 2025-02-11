// Firebase SDK Include
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBj_XFwSi9CATeMpMZdKQoQRd-rBt-85iE",
  authDomain: "virus-945ac.firebaseapp.com",
  projectId: "virus-945ac",
  storageBucket: "virus-945ac.appspot.com",
  messagingSenderId: "248199210206",
  appId: "1:248199210206:web:a2053fd638d8274103ce4f",
  measurementId: "G-P9NPJ5KH0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore DB
export { db, collection, getDocs, addDoc, deleteDoc, doc };

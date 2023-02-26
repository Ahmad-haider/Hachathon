
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword , getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj4OcNSbQcfhdwQYcZ052BKDAU3gkF_jw",
  authDomain: "event-planning-app-2add1.firebaseapp.com",
  projectId: "event-planning-app-2add1",
  storageBucket: "event-planning-app-2add1.appspot.com",
  messagingSenderId: "338197107292",
  appId: "1:338197107292:web:b84754c290e31181a00c99",
  measurementId: "G-3M7V9EGMVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)


export { auth,db, createUserWithEmailAndPassword , signInWithEmailAndPassword,  onAuthStateChanged , }
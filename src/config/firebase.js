import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTXKpj40eTWtQqfwgc8hVnPoYhyG1XCXI",
  authDomain: "proudly-anambra-app.firebaseapp.com",
  projectId: "proudly-anambra-app",
  storageBucket: "proudly-anambra-app.firebasestorage.app",
  messagingSenderId: "57396074440",
  appId: "1:57396074440:web:8906352c09318d487cd2fd",
  measurementId: "G-3TL3BDD421",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

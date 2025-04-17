// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8iP_4HhEO1nDUR2nFInUZ3Z1NyBypl5g",
  authDomain: "expense-tracker-50383.firebaseapp.com",
  projectId: "expense-tracker-50383",
  storageBucket: "expense-tracker-50383.firebasestorage.app",
  messagingSenderId: "895125583945",
  appId: "1:895125583945:web:be5878f1b5b8229a2fa798",
  measurementId: "G-ZRQFNRE4JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
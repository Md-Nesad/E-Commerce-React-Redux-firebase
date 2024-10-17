import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDllEo0ZKlas9XcPoCPLYv4-2-qrFlteNU",
  authDomain: "react-ecommerce-3373e.firebaseapp.com",
  projectId: "react-ecommerce-3373e",
  storageBucket: "react-ecommerce-3373e.appspot.com",
  messagingSenderId: "601143960769",
  appId: "1:601143960769:web:e2b19e9f7346e854f96040",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };

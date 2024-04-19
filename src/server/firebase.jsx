// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDEMBghespsdPcFi9E00wOCy_tXKEi3hk",
  authDomain: "trial-d8141.firebaseapp.com",
  projectId: "trial-d8141",
  storageBucket: "trial-d8141.appspot.com",
  messagingSenderId: "896545358797",
  appId: "1:896545358797:web:af5d4e9ae2a7b82e83fa84",
  measurementId: "G-Y8NYHS7K8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {auth , db};

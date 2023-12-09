// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdOem2FIZNaCe-ka59ZL-unzewrBn8S5Q",
  authDomain: "examiner-24029.firebaseapp.com",
  projectId: "examiner-24029",
  storageBucket: "examiner-24029.appspot.com",
  messagingSenderId: "447749448978",
  appId: "1:447749448978:web:129193eddda3b7fd1abfcb",
  measurementId: "G-HCRT4PW5R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

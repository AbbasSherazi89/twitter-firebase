// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDNnGYW1owz8VA5PAN2DyOMZ7utmzkhwY",
  authDomain: "twitter-firebase-5ac08.firebaseapp.com",
  projectId: "twitter-firebase-5ac08",
  storageBucket: "twitter-firebase-5ac08.appspot.com",
  messagingSenderId: "209120625520",
  appId: "1:209120625520:web:5275452efbfc18944445b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
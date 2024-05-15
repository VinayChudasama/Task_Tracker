// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import the specific function for Firestore
import { getStorage } from "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX5oggQk72U80KvkyJHej35GsfFScgZPY",
  authDomain: "task-tracker-65ad4.firebaseapp.com",
  projectId: "task-tracker-65ad4",
  storageBucket: "task-tracker-65ad4.appspot.com",
  messagingSenderId: "284174971053",
  appId: "1:284174971053:web:a36ed3832f181149d09624",
  measurementId: "G-DXJF9VRVDG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
 
export { db, storage };

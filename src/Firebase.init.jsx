// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsgx-r0Z6g7XjhDJu9WQP6ktdrlYygwB8",
  authDomain: "mobiphone-e7613.firebaseapp.com",
  projectId: "mobiphone-e7613",
  storageBucket: "mobiphone-e7613.appspot.com",
  messagingSenderId: "938040920886",
  appId: "1:938040920886:web:1cf7234293a08b3c724197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth
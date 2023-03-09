import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyAxiaEZkpLIrEGhh_FhqRbBjuYNKGilPjA",
  authDomain: "twitter-clone-dcd90.firebaseapp.com",
  databaseURL: "https://twitter-clone-dcd90-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-dcd90",
  storageBucket: "twitter-clone-dcd90.appspot.com",
  messagingSenderId: "713683147451",
  appId: "1:713683147451:web:c0fef7fc596b736eb3a79e",
  measurementId: "G-7EYVN3W63S",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const db = getDatabase(app)

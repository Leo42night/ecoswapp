// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBoRGqNBmXGGmVHqgkUZPR_-9xZoa9KMg",
  authDomain: "nextjs-auth-97413.firebaseapp.com",
  projectId: "nextjs-auth-97413",
  storageBucket: "nextjs-auth-97413.appspot.com",
  messagingSenderId: "32721049472",
  appId: "1:32721049472:web:8cf66774ca88ee4e48d365"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
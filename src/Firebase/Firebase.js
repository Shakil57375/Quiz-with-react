// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8R5YuO4QLWFilrUEP-Qw9V20O7iDFoNs",
  authDomain: "react-quiz-dev-7c81b.firebaseapp.com",
  projectId: "react-quiz-dev-7c81b",
  storageBucket: "react-quiz-dev-7c81b.appspot.com",
  messagingSenderId: "721150169204",
  appId: "1:721150169204:web:7c5e2d3c5a221287998121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
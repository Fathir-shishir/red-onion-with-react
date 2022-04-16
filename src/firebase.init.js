// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsIKAC58OEohOoKVKIHJdYWVSGLQ4ioIk",
  authDomain: "red-onion-with-react.firebaseapp.com",
  projectId: "red-onion-with-react",
  storageBucket: "red-onion-with-react.appspot.com",
  messagingSenderId: "623116694492",
  appId: "1:623116694492:web:d5edb082a2ea8e0f8f5519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
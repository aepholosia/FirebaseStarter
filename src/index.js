// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzH36sNafvogZyXHMSTI6265BlUfDXYts",
  authDomain: "jinayongettingstartedfirebase.firebaseapp.com",
  projectId: "jinayongettingstartedfirebase",
  storageBucket: "jinayongettingstartedfirebase.appspot.com",
  messagingSenderId: "994784538018",
  appId: "1:994784538018:web:fa9df6ea610c6006e896fb",
  measurementId: "G-T1PMCS7M5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)
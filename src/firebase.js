// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-WFw3ItTtg41qEMd7INerxg6_eaCd8Yc",
  authDomain: "kepgardens-575e7.firebaseapp.com",
  projectId: "kepgardens-575e7",
  storageBucket: "kepgardens-575e7.appspot.com",
  messagingSenderId: "288401528470",
  appId: "1:288401528470:web:ec47b9a91c8522612f94b7",
  measurementId: "G-WPH6C5PFM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
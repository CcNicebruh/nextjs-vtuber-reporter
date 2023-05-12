// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgalS9vyMxFPZn1wrX_BuuUY_APSWEfiA",
  authDomain: "vtuberthreport.firebaseapp.com",
  projectId: "vtuberthreport",
  storageBucket: "vtuberthreport.appspot.com",
  messagingSenderId: "776382135641",
  appId: "1:776382135641:web:6e22779b1315e334a3e048",
  measurementId: "G-XCKLNMSXCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
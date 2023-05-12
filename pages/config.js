import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = initializeApp ({
  apiKey: "AIzaSyDgalS9vyMxFPZn1wrX_BuuUY_APSWEfiA",
  authDomain: "vtuberthreport.firebaseapp.com",
  projectId: "vtuberthreport",
  storageBucket: "vtuberthreport.appspot.com",
  messagingSenderId: "776382135641",
  appId: "1:776382135641:web:6e22779b1315e334a3e048",
  measurementId: "G-XCKLNMSXCG"
});

export default firebaseConfig;
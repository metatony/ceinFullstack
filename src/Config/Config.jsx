import firebase from "firebase/compat/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPTukPt6DX1XVlRWpGMteEUJd4su_-HQc",
  authDomain: "cein-2.firebaseapp.com",
  projectId: "cein-2",
  storageBucket: "cein-2.appspot.com",
  messagingSenderId: "846502656779",
  appId: "1:846502656779:web:9d28ee2fdf05b53817800e",
  measurementId: "G-09CS6K25CY"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app)
const fs = getFirestore(app)
const storage = getStorage(app)

export {auth, fs, storage}
import firebase from "firebase/compat/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJ_X1YpYdqGs6J9CqpAnycTY36UB0Sg_0",
    authDomain: "cein-68593.firebaseapp.com",
    projectId: "cein-68593",
    storageBucket: "cein-68593.appspot.com",
    messagingSenderId: "456867055450",
    appId: "1:456867055450:web:b1463ae7e054997d89d563",
    measurementId: "G-3WX6H3L07D"
  };

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app)
const fs = getFirestore(app)
const storage = getStorage(app)

export {auth, fs, storage}
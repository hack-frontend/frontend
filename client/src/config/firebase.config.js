import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAi0DtnsxsN369wVml0RTw5TdsdFhrgQio",
  authDomain: "hack4h-9d4cf.firebaseapp.com",
  projectId: "hack4h-9d4cf",
  storageBucket: "hack4h-9d4cf.appspot.com",
  messagingSenderId: "614604192044",
  appId: "1:614604192044:web:98a677d74f8d4c60639489",
  measurementId: "G-GGNBG5RS5T",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

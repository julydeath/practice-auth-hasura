// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUK2xHa2aSVjIEVrbImXQuA6Ts9ci1AA8",
  authDomain: "todo-hasura-51d43.firebaseapp.com",
  projectId: "todo-hasura-51d43",
  storageBucket: "todo-hasura-51d43.appspot.com",
  messagingSenderId: "149198018136",
  appId: "1:149198018136:web:70e202e416f98e0e801c2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

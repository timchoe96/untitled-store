import firebase from "firebase/app";
import "firebase/firestore";

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBWfmA60le4GvRe3M2Oa87M-vi1ehHdYGM",
  authDomain: "untitled-store.firebaseapp.com",
  databaseURL: "https://untitled-store.firebaseio.com",
  projectId: "untitled-store",
  storageBucket: "untitled-store.appspot.com",
  messagingSenderId: "227813418446",
  appId: "1:227813418446:web:8aca7eb833f20b1b00f79f",
  measurementId: "G-FPD8LXR02W",
});

const db = firebase.firestore();
const auth = firebase.auth();

export default auth;

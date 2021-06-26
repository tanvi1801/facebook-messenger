// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9QDLBhwfNqYoscoPQOACuqR9fAj13i1I",
    authDomain: "facebook-messenger-c0e08.firebaseapp.com",
    projectId: "facebook-messenger-c0e08",
    storageBucket: "facebook-messenger-c0e08.appspot.com",
    messagingSenderId: "355843452052",
    appId: "1:355843452052:web:045968508387bb60509881",
    measurementId: "G-04HGQQWT42"
});

const db = firebaseApp.firestore();

export default db;
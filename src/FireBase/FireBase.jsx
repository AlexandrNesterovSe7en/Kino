// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWh34zRFL8m4cjjkreSGsSGMe-29fe8ps",
    authDomain: "kinopoisk-e5c8f.firebaseapp.com",
    projectId: "kinopoisk-e5c8f",
    storageBucket: "kinopoisk-e5c8f.appspot.com",
    messagingSenderId: "989760247964",
    appId: "1:989760247964:web:c35aadc73191593b51f559",
    measurementId: "G-8SC1WKKP1N",
    databaseURL: "https://kinopoisk-e5c8f-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
export const database = getDatabase(app);
export const auth = getAuth(app);


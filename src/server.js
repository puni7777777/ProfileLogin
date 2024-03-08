// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUPxT-UN_DvBEOggVg9F2zp07Hnq41qok",
    authDomain: "attendance-cdc09.firebaseapp.com",
    databaseURL: "https://attendance-cdc09-default-rtdb.firebaseio.com",
    projectId: "attendance-cdc09",
    storageBucket: "attendance-cdc09.appspot.com",
    messagingSenderId: "185249604928",
    appId: "1:185249604928:web:6c41e9a21c64d774d586a5",
    measurementId: "G-SF97FMCJ3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


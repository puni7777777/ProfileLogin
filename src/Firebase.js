// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

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
export default app;
const analytics = getAnalytics(app);
// export const create_auth = getAuth();


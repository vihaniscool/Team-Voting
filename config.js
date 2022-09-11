import firebase from 'firebase';
import { initializeApp } from "firebase/app";

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyAFGPurtbRYLjNO63batmZ9M6uTRYkY60M",
        authDomain: "tem-vote.firebaseapp.com",
        databaseURL: "https://tem-vote-default-rtdb.firebaseio.com",
        projectId: "tem-vote",
        storageBucket: "tem-vote.appspot.com",
        messagingSenderId: "810683283643",
        appId: "1:810683283643:web:68862a01bb41f7000e519e"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();
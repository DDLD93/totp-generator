//import * as firebase from "firebase/app";
import firebase from 'firebase/app'
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAjEmiBw-NJOVqMaUoXLy-qTOL6AIyOA2U",
    authDomain: "totp-generator-58efe.firebaseapp.com",
    projectId: "totp-generator-58efe",
    storageBucket: "totp-generator-58efe.appspot.com",
    messagingSenderId: "215684116631",
    appId: "1:215684116631:web:82f87da09fd1ea94c7b9d2"
  };

  export var app = firebase.initializeApp(firebaseConfig);
    

  export default firebase
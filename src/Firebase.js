//import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/functions'


const firebaseConfig = {
  apiKey: "AIzaSyBHUfko63cc9WPw6a11rhAf5Dt1gYkFto0",
  authDomain: "ddld93.firebaseapp.com",
  databaseURL: "https://ddld93-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ddld93",
  storageBucket: "ddld93.appspot.com",
  messagingSenderId: "772087817009",
  appId: "1:772087817009:web:7449bf2d838ae2acbf0610"
  };

  export var app = firebase.initializeApp(firebaseConfig);
    

  export default firebase
  
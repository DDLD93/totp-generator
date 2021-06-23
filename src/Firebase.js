//import * as firebase from "firebase/app";
import firebase from 'firebase/app'
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD-tedQTg4b0EIkw8WahJkCEf2MziZP3L0",
  authDomain: "totp-generator-12baa.firebaseapp.com",
  projectId: "totp-generator-12baa",
  storageBucket: "totp-generator-12baa.appspot.com",
  messagingSenderId: "337057138190",
  appId: "1:337057138190:web:3a4e1c4d7eb410a57c5e5f"
  };

  export var app = firebase.initializeApp(firebaseConfig);
    

  export default firebase
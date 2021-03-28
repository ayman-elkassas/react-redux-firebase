//todo:npm i firebase react-redux-firebase redux-firestore

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBjTXr69R0JezsA7iH-dOU4-wJcEye-F8w",
    authDomain: "react-redux-project-management.firebaseapp.com",
    projectId: "react-redux-project-management",
    storageBucket: "react-redux-project-management.appspot.com",
    messagingSenderId: "768491318222",
    appId: "1:768491318222:web:aa26d89c73c0490c99999f",
    measurementId: "G-KDELC6T79W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({timestampsInSnapshots:true})
// firebase.auth()

export default firebase

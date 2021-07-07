import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC0tBi-d7U8YL7LjBCReVFHEhLBDYIna48",
    authDomain: "udemyvue-7106c.firebaseapp.com",
    projectId: "udemyvue-7106c",
    storageBucket: "udemyvue-7106c.appspot.com",
    messagingSenderId: "58870491524",
    appId: "1:58870491524:web:fd4f8f459223815f2f95d1"
};
  

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore,timestamp, projectAuth}
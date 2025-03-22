import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC0tBi-d7U8YL7LjBCReVFHEhLBDYIna48",
    authDomain: "udemyvue-7106c.firebaseapp.com",
    projectId: "udemyvue-7106c",
    storageBucket: "udemyvue-7106c.appspot.com",
    messagingSenderId: "58870491524",
    appId: "1:58870491524:web:fd4f8f459223815f2f95d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
const projectAuth = getAuth(app)
const projectFirestore = getFirestore(app)
const timestamp = serverTimestamp

export { projectFirestore, timestamp, projectAuth }
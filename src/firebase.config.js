import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA5fhXYU_VNDIMzZ0SKaD4n5jXnKfVclyo",
    authDomain: "deliver-app-e46d0.firebaseapp.com",
    databaseURL: "https://deliver-app-e46d0-default-rtdb.firebaseio.com",
    projectId: "deliver-app-e46d0",
    storageBucket: "deliver-app-e46d0.appspot.com",
    messagingSenderId: "53667460277",
    appId: "1:53667460277:web:0f37df604e2b59c3b9bafc",
    measurementId: "G-89ZM6SC6VX"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }

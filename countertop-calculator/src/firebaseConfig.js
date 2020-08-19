import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMV7NiEvOkK04idU-jz56NJcC9nITEnxM",
    authDomain: "countertopcalculator.firebaseapp.com",
    databaseURL: "https://countertopcalculator.firebaseio.com",
    projectId: "countertopcalculator",
    storageBucket: "countertopcalculator.appspot.com",
    messagingSenderId: "438842232630",
    appId: "1:438842232630:web:3b719c7e1c243225ec2d97",
    measurementId: "G-K6JZT0H6TM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export  {db, auth, storage};


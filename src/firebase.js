import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCY9_WS7pGJ7lz06cuV2eS9ryKmx8ZfmLE",
    authDomain: "amzn-clone-285e6.firebaseapp.com",
    databaseURL: "https://amzn-clone-285e6.firebaseio.com",
    projectId: "amzn-clone-285e6",
    storageBucket: "amzn-clone-285e6.appspot.com",
    messagingSenderId: "701587111222",
    appId: "1:701587111222:web:2ab01c573a3ee975f08797",
    measurementId: "G-JSWD0PD52Z"
});

const auth = firebase.auth();

export {auth};

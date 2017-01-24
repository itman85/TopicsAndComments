import * as firebase from 'firebase'
// Register firebase app to receive firebase web app config
// Initialize Firebase
  var config = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    storageBucket: "...",
    messagingSenderId: "..."
  };

export const firebaseApp = firebase.initializeApp(config);
export const topicsRef = firebase.database().ref();

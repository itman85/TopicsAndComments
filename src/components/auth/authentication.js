import * as firebase from 'firebase'
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkZGAHXx-oE6ZsOAmeKh5JnOnxDIAvXFU",
    authDomain: "topicsncomments.firebaseapp.com",
    databaseURL: "https://topicsncomments.firebaseio.com",
    storageBucket: "topicsncomments.appspot.com",
    messagingSenderId: "980861685443"
  };

export const firebaseApp = firebase.initializeApp(config);
export const topicsRef = firebase.database().ref();

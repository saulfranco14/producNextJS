const firebaseConfig = {
    apiKey              : "AIzaSyDdDtGAQvisfhZIv_xNRqBynDywSQfQOfs",
    authDomain          : "floreria-jazmin.firebaseapp.com",
    projectId           : "floreria-jazmin",
    storageBucket       : "floreria-jazmin.appspot.com",
    messagingSenderId   : "377128094244",
    appId               : "1:377128094244:web:eef9691ddfcfa43f83e6b1",
    measurementId       : "G-JQ23TZD4WT"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebaseConfig();
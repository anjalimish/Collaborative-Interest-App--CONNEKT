import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyDoGTH46v-AAw4tz-iw6Se5Nr0fPQrlCQE",
    authDomain: "connekt-app-74b63.firebaseapp.com",
    databaseURL: "https://connekt-app-74b63.firebaseio.com",
    projectId: "connekt-app-74b63",
    storageBucket: "connekt-app-74b63.appspot.com",
    messagingSenderId: "319431333081",
    appId: "1:319431333081:web:b6ce881a7f5b796f6edac8",
    measurementId: "G-QCGSJPTL0R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase;
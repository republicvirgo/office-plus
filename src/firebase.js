import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyDa3W7kW0lY-4OccLLWCh7aACTDZZYFN5Y",
  authDomain: "office-plus-website.firebaseapp.com",
  databaseURL: "https://office-plus-website.firebaseio.com",
  projectId: "office-plus-website",
  storageBucket: "office-plus-website.appspot.com",
  messagingSenderId: "775493716753"
};

firebase.initializeApp(config);

export default firebase;

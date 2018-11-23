import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyD-Ey8WscLT3l_a4BBFnEb5VOvBRzJgj6c",
  authDomain: "react-slack-clone-ef537.firebaseapp.com",
  databaseURL: "https://react-slack-clone-ef537.firebaseio.com",
  projectId: "react-slack-clone-ef537",
  storageBucket: "react-slack-clone-ef537.appspot.com",
  messagingSenderId: "159137816814"
};

firebase.initializeApp(config);

export default firebase;

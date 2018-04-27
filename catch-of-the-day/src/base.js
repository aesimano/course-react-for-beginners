import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDyjalOFXIWNg36OMTSJY5yfS9TYB7ATG4",
  authDomain: "catch-of-the-day-a5ed8.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-a5ed8.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;

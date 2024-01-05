// imports, not same as video
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

// config copied from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBZn43XzdhrG4QSSd8cmU15Ju-ZizHVlJ8",
  authDomain: "messagingapp-6434c.firebaseapp.com",
  projectId: "messagingapp-6434c",
  storageBucket: "messagingapp-6434c.appspot.com",
  messagingSenderId: "445760231394",
  appId: "1:445760231394:web:639047552a345710740bbb",
};

let app;

// If we have not already initialized the app, initialize it
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
// else initialize the app with the already initialized one
else {
  app = firebase.app();
}

// Set up access variables
const db = app.firestore();
const auth = firebase.auth();

// Give access to whole code to firebase variables
export { db, auth };

// imports, not same as video
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

// config copied from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyD55xZGTPX9KcHFpxn8dSEOp7E6kM7LKcs",
  authDomain: "messagingapp3-8bf85.firebaseapp.com",
  projectId: "messagingapp3-8bf85",
  storageBucket: "messagingapp3-8bf85.appspot.com",
  messagingSenderId: "503248088500",
  appId: "1:503248088500:web:744d5cd5ce77cc415356e1"
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

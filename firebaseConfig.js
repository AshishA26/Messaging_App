// imports, not same as video
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

// config copied from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyCLi5rpaZLWnHhm1e9lRbDfjf3kt9ToDG8",
  authDomain: "messagingapp-dfe24.firebaseapp.com",
  projectId: "messagingapp-dfe24",
  storageBucket: "messagingapp-dfe24.appspot.com",
  messagingSenderId: "575710321627",
  appId: "1:575710321627:web:a427d0f2bdf0ac4882e5fe"
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

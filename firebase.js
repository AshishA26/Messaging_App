// imports, not same as video
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

// config copied from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyDqkBcplyJSsAPIIdtZePgik3thyREjxjU",
  authDomain: "messagingapp2-6537d.firebaseapp.com",
  projectId: "messagingapp2-6537d",
  storageBucket: "messagingapp2-6537d.appspot.com",
  messagingSenderId: "509309590958",
  appId: "1:509309590958:web:14d226a1c60b27e2e57c3f"
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

# Messaging_App

## Notes
In order for it to work on my phone on expo go, I had to disable the other networks on my computer so that WiFi was the 1st active one. Then I had to use hotspot from my phone to the computer, then do npm start. Then I scanned the bar code, waited for it to download, then retryed on my phone. Then it worked.

Android emulator does not work


Commands to run:

npm install firebase
npm install -g firebase-tools
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated @react-native/community/masked-view
npm install @react-navigation/stack
npm install @react-navigation/native-stack
npm install
npm install react-native-elements

Install ES7+ React/Redux/React-Native snippets from VS code extensions




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZn43XzdhrG4QSSd8cmU15Ju-ZizHVlJ8",
  authDomain: "messagingapp-6434c.firebaseapp.com",
  projectId: "messagingapp-6434c",
  storageBucket: "messagingapp-6434c.appspot.com",
  messagingSenderId: "445760231394",
  appId: "1:445760231394:web:639047552a345710740bbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
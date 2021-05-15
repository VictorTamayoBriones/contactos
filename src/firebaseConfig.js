import firebase from 'firebase/app';
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_CONTACTOS_API_KEY,
  authDomain: process.env.REACT_APP_CONTACTOS_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_CONTACTOS_PROJECT_ID,
  storageBucket: process.env.REACT_APP_CONTACTOS_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_CONTACTOS_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_CONTACTOS_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
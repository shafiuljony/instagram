import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBIFdOr7U0DB527o043EpYAI0n9obMGPFk",
  authDomain: "instagram-455f0.firebaseapp.com",
  projectId: "instagram-455f0",
  storageBucket: "instagram-455f0.appspot.com",
  messagingSenderId: "554451924783",
  appId: "1:554451924783:web:9448a031c2ae435cd913da"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };

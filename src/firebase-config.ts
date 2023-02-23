import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwToS3FE0423Yo286ad94j-4dyLE-8F7k",
  authDomain: "capt-oh.firebaseapp.com",
  projectId: "capt-oh",
  storageBucket: "capt-oh.appspot.com",
  messagingSenderId: "315649276933",
  appId: "1:315649276933:web:a9defce6778d702c7d706c",
  measurementId: "G-88WGBD2KE9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const auth = getAuth(app)
//const provider = new GoogleAuthProvider();

export {db}

import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQHomFMSx4SRxxqsiiNKdyu5pgXcPoe6k",
  authDomain: "unlimited-project-react.firebaseapp.com",
  projectId: "unlimited-project-react",
  storageBucket: "unlimited-project-react.appspot.com",
  messagingSenderId: "826847095254",
  appId: "1:826847095254:web:1a00ed84163a6559201c77"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
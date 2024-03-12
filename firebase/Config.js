import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,serverTimestamp, query, onSnapshot } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    query,
    onSnapshot,
    addDoc,
    serverTimestamp,
    MESSAGES
}
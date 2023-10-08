import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBmOs7EX0Qc_-q5EWtysrcEIJH2KYo8Se4",
    authDomain: "bits-a5742.firebaseapp.com",
    projectId: "bits-a5742",
    storageBucket: "bits-a5742.appspot.com",
    messagingSenderId: "460243391688",
    appId: "1:460243391688:web:b7585ff16f2a5d6b3441fd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
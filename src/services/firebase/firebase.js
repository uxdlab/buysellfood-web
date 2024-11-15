// src/firebase-config.js
import  { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQB9jGvgKpXFnlXFYMAOYFGLRL9RcFCoA",
    authDomain: "buyandsellfood-ce6df.firebaseapp.com",
    projectId: "buyandsellfood-ce6df",
    storageBucket: "buyandsellfood-ce6df.firebasestorage.app",
    messagingSenderId: "265193455322",
    appId: "1:265193455322:web:3b9712f651f3bd5e4c6fe3",
    measurementId: "G-S80V9YRZTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;

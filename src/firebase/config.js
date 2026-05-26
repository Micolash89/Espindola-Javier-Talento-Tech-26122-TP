// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaIrQliniSaU6evgcGHxruTRwQW2XJgls",
  authDomain: "proyect-talent-tech-react-2026.firebaseapp.com",
  projectId: "proyect-talent-tech-react-2026",
  storageBucket: "proyect-talent-tech-react-2026.firebasestorage.app",
  messagingSenderId: "373740463879",
  appId: "1:373740463879:web:4da65517cb058df86347a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
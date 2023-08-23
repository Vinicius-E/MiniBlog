import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGcURIlGxB4ZZDHZnadoD6zG5F8O86jnI",
  authDomain: "blog-9775b.firebaseapp.com",
  projectId: "blog-9775b",
  storageBucket: "blog-9775b.appspot.com",
  messagingSenderId: "459046554903",
  appId: "1:459046554903:web:d94d75af02ded5b73a3b52"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
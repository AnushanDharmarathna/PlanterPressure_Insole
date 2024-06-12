import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCYiPWcrWXVknOX6xh8EJYBIfEIt6ipZdw",
  authDomain: "plantarpressure-b0c60.firebaseapp.com",
  databaseURL: "https://plantarpressure-b0c60-default-rtdb.firebaseio.com",
  projectId: "plantarpressure-b0c60",
  storageBucket: "plantarpressure-b0c60.appspot.com",
  messagingSenderId: "678317323162",
  appId: "1:678317323162:web:99a114fd3d6d97b5b28023",
  measurementId: "G-P61TV9ERZ3",
};

const app = initializeApp(firebaseConfig);
const projectFirestore = getDatabase(app);
const auth = getAuth(app);

export { auth, projectFirestore };

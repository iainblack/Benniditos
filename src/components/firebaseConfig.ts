import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export default function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDYtw6jLiRYtOFLkrDEoV0aR2J4U-Gd7b4",
    authDomain: "benniditos.firebaseapp.com",
    databaseURL: "https://benniditos-default-rtdb.firebaseio.com",
    projectId: "benniditos",
    storageBucket: "benniditos.appspot.com",
    messagingSenderId: "106838092070",
    appId: "1:106838092070:web:b21b64dc834dbe82a4b9e7",
    measurementId: "G-HMWPBPD7EM",
  };

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export default function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyAKNAcyH3iSPckU99a8zIpyfodYxaJ5mZs",
    authDomain: "benniditos-menus.firebaseapp.com",
    databaseURL: "https://benniditos-menus-default-rtdb.firebaseio.com",
    projectId: "benniditos-menus",
    storageBucket: "benniditos-menus.appspot.com",
    messagingSenderId: "265742194599",
    appId: "1:265742194599:web:2bb2473e9208f3f3bfc882",
    measurementId: "G-PZVN62CHLC",
  };

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

import firebase from "firebase/compat/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZa0usLe2ZyEzIXhHVF1RsVHEoZqwJBuw",
  authDomain: "biltransport-plattform.firebaseapp.com",
  projectId: "biltransport-plattform",
  storageBucket: "biltransport-plattform.appspot.com",
  messagingSenderId: "846097849231",
  appId: "1:846097849231:web:d8a577bac25f1d984609fa",
  measurementId: "G-G50H0HHHQY",
};

firebase.initializeApp(firebaseConfig);

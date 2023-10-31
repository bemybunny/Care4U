import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDHgNPHlFdYPfcOZsUXRfbL7Js-epECyrA",
    authDomain: "care4u-26de4.firebaseapp.com",
    projectId: "care4u-26de4",
    storageBucket: "care4u-26de4.appspot.com",
    messagingSenderId: "414677199077",
    appId: "1:414677199077:web:fada7e72c2a311e8ea4c0c",
    measurementId: "G-NFGV30F98Z"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  export {auth,provider};
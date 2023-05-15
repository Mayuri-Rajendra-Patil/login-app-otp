// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/auth';

import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnBFG1kyLZJSNnnLvBHLCWYCgHb8hAF98",
  authDomain: "phone-login-34e41.firebaseapp.com",
  projectId: "phone-login-34e41",
  storageBucket: "phone-login-34e41.appspot.com",
  messagingSenderId: "371399537784",
  appId: "1:371399537784:web:6ecf324228a0d176b4298d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
export default firebase
 
// const auth=firebase.auth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBMyv9qEjEDSgD16Mg19euXeiEsdFuxbdM",
  authDomain: "project3-59d81.firebaseapp.com",
  projectId: "project3-59d81",
  storageBucket: "project3-59d81.appspot.com",
  messagingSenderId: "491487211751",
  appId: "1:491487211751:web:7222bf00563fc37869b242"
};


const app = initializeApp(firebaseConfig);
 export const database = getAuth (app)

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXDYEnbCYrnIGZGN1Coys1wfiTMnLCdOg",
  authDomain: "portfolio-21e64.firebaseapp.com",
  projectId: "portfolio-21e64",
  storageBucket: "portfolio-21e64.appspot.com",
  messagingSenderId: "482878943553",
  appId: "1:482878943553:web:5e71468c294b1c453b31c0",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

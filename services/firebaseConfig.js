import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCJ8Pg_J4d4phftIv7DPwc83FAw38HMXU",
  authDomain: "ecoaprende-7640a.firebaseapp.com",
  projectId: "ecoaprende-7640a",
  storageBucket: "ecoaprende-7640a.appspot.com",
  messagingSenderId: "884869259260",
  appId: "1:884869259260:web:23fd0f426683e42465dc79",
  measurementId: "G-98ZR659HL4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

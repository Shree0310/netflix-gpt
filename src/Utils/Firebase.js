// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP8n0IVqFQ3bVgwgPwTH5DoSu386YTLpg",
  authDomain: "netflixgpt-6c56c.firebaseapp.com",
  projectId: "netflixgpt-6c56c",
  storageBucket: "netflixgpt-6c56c.appspot.com",
  messagingSenderId: "348217333744",
  appId: "1:348217333744:web:664577dc9118291bc1af35",
  measurementId: "G-L6GCJDY2YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//exporting auth
export const auth = getAuth();
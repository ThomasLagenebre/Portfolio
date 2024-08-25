// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8cWekzrWgEvZqmxYf2hOgKyzrL_YoWck",
  authDomain: "devbytoma-portfolio.firebaseapp.com",
  projectId: "devbytoma-portfolio",
  storageBucket: "devbytoma-portfolio.appspot.com",
  messagingSenderId: "904684736573",
  appId: "1:904684736573:web:2e30e87bd7e0a5e7c95a54",
  measurementId: "G-3MV19XYX1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUYVas5HEYf1eIxTJDTVstMG-dp60lLQw",
  authDomain: "myapp-e8099.firebaseapp.com",
  databaseURL: "https://myapp-e8099-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myapp-e8099",
  storageBucket: "myapp-e8099.appspot.com",
  messagingSenderId: "295719683882",
  appId: "1:295719683882:web:d1959e244495dee15b4053",
  measurementId: "G-73XJNKH6CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
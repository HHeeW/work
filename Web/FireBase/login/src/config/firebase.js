import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
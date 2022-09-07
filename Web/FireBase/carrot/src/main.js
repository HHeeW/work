import { createApp } from 'vue'
import App from './App.vue'
import '@/plugins/firebase'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBu6cy6ybaRcM3yQVI0TPjH_AcP78aKCmI",
  authDomain: "carrot-40c5c.firebaseapp.com",
  projectId: "carrot-40c5c",
  storageBucket: "carrot-40c5c.appspot.com",
  messagingSenderId: "106271272909",
  appId: "1:106271272909:web:4573f5ae0813f576cd5e84"
};

const app = initializeApp(firebaseConfig);

createApp(App).mount('#app')

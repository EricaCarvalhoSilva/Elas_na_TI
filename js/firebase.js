import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDY4L6PZpviMtTxZr9vTGi2Fm9gb1yCPtQ",
  authDomain: "elas-na-ti.firebaseapp.com",
  projectId: "elas-na-ti",
  storageBucket: "elas-na-ti.firebasestorage.app",
  messagingSenderId: "309733541489",
  appId: "1:309733541489:web:e6f27d2ce3e3df1c41fdd0",
  measurementId: "G-E4QDH8B2DJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
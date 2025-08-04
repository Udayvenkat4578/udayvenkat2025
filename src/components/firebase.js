// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, runTransaction } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCwRNBbU1_yuVE-gjQ6rcl2vpsBsEYrj_E",
  authDomain: "portfolio-cede9.firebaseapp.com",
  databaseURL: "https://portfolio-cede9-default-rtdb.firebaseio.com",
  projectId: "portfolio-cede9",
  storageBucket: "portfolio-cede9.firebasestorage.app",
  messagingSenderId: "224099814020",
  appId: "1:224099814020:web:b346736b42297f02b5d0d1"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, runTransaction };

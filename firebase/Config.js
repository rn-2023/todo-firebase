import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Add here the database configuration values
const firebaseConfig = ({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const TODOS_REF = '/todos/';
// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAN-a9a4u9JSuG1PtfauZ5fSu6dlNcApgY",
  authDomain: "iahealthfit-52d82.firebaseapp.com",
  projectId: "iahealthfit-52d82",
  storageBucket: "iahealthfit-52d82.appspot.com",
  messagingSenderId: "231967722388",
  appId: "1:231967722388:web:cee934ed4395fdb96d9d81"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Exportando a autenticação e o Firestore
export const auth = getAuth(app);  // Correto uso do auth
export const db = getFirestore(app);

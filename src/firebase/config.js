import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage'
import 'firebase/auth'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpj67tgJsy_7n8LrvGGvI6_s50WD9x34Y",
  authDomain: "fir-308cc.firebaseapp.com",
  projectId: "fir-308cc",
  storageBucket: "fir-308cc.appspot.com",
  messagingSenderId: "257838895682",
  appId: "1:257838895682:web:4719eabfafc66cafb413db",
  measurementId: "G-VTHNPF0B3H"
  };

  const firebaseapp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseapp)
  
  export default db
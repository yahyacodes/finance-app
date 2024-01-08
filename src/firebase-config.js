import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGZIcV7AEOL-ltDRd1KkpFNGoUG_FTO9U",
  authDomain: "finance-app-2891d.firebaseapp.com",
  projectId: "finance-app-2891d",
  storageBucket: "finance-app-2891d.appspot.com",
  messagingSenderId: "23690820259",
  appId: "1:23690820259:web:6647e5d1e3870c93b4dd16",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

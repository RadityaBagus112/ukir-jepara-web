import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrPGnPzoPaGNNWuT3P8sVUlAOQgiapmmY",
  authDomain: "ukir-jepara-d9fc9.firebaseapp.com",
  projectId: "ukir-jepara-d9fc9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCUxoZyQC_DAPqpE3gwg26JAw-F-MLotM",
  authDomain: "essence-development.firebaseapp.com",
  projectId: "essence-development",
  storageBucket: "essence-development.appspot.com",
  messagingSenderId: "564793649830",
  appId: "1:564793649830:web:3b14017074f7e41ae32267"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

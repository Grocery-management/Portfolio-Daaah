import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBx5eSJovstsJvILB4ODSLiwVjnizIghUc",
  authDomain: "portfolio-30bfb.firebaseapp.com",
  projectId: "portfolio-30bfb",
  storageBucket: "portfolio-30bfb.appspot.com",
  messagingSenderId: "449470295022",
  appId: "1:449470295022:web:ca06b4b1227f4b700afcff",
  measurementId: "G-G8D3C7WK6Z"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const analytics = getAnalytics(app);
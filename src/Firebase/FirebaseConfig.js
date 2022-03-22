//utilización firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXDuRBM1xRru0mxcbMOhPJn5JJ0u732uk",
  authDomain: "dioneonled-4d8cf.firebaseapp.com",
  projectId: "dioneonled-4d8cf",
  storageBucket: "dioneonled-4d8cf.appspot.com",
  messagingSenderId: "557417815928",
  appId: "1:557417815928:web:792a7ccb0da03d18b2328d",
  measurementId: "G-T93FTJL2FE"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
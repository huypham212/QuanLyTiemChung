import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDVTE1TX-FBbK-gH-k9_BtxsSMt8leH288",
    authDomain: "qltc-57440.firebaseapp.com",
    databaseURL: "https://qltc-57440-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qltc-57440",
    storageBucket: "qltc-57440.appspot.com",
    messagingSenderId: "173278656065",
    appId: "1:173278656065:web:be9f1c6e898e39bbe238c0",
    measurementId: "G-B54VVYN06D"
};

const app = initializeApp(firebaseConfig);

export default app;
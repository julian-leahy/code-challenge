import firebase from 'firebase/app';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCWlDPOtQmZJ59t8B5AngDOFcyCxzAYCk",
    authDomain: "quiz-7d351.firebaseapp.com",
    projectId: "quiz-7d351",
    storageBucket: "quiz-7d351.appspot.com",
    messagingSenderId: "802741550505",
    appId: "1:802741550505:web:56866e8035a171833858b8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5_g2at5wSiMebA-25YAiB08Q0SxIKXs4",
    authDomain: "ip3-project-50e98.firebaseapp.com",
    projectId: "ip3-project-50e98",
    storageBucket: "ip3-project-50e98.appspot.com",
    messagingSenderId: "347288325350",
    appId: "1:347288325350:web:fd926721efada498e27f27",
    measurementId: "G-L6YHP5NZS3"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
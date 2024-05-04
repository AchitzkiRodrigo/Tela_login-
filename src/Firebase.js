import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBnEK0Z9I3wKgXDIrWt4NlPAu_51tD9qH8",
  authDomain: "telalogin2-a1cc2.firebaseapp.com",
  projectId: "telalogin2-a1cc2",
  storageBucket: "telalogin2-a1cc2.appspot.com",
  messagingSenderId: "217806998589",
  appId: "1:217806998589:web:0687ebd04f381f3ce16e54"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

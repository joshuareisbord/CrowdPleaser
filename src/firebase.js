import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDmFlXzb144hHXyHjnU03aNSqMe69uvTbo",
    authDomain: "crowd-pleaser-75fd7.firebaseapp.com",
    databaseURL: "https://crowd-pleaser-75fd7-default-rtdb.firebaseio.com",
    projectId: "crowd-pleaser-75fd7",
    storageBucket: "crowd-pleaser-75fd7.appspot.com",
    messagingSenderId: "165833840740",
    appId: "1:165833840740:web:f30d0e894df201c599a771",
    measurementId: "G-LJQCKWC2LL"
  };

firebase.initializeApp(firebaseConfig)

export default firebase;
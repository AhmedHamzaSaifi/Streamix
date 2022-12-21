import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
 
    apiKey: "AIzaSyAjOH_4qH4m0P6zntd1LD58xqtdInerGQE",
    authDomain: "final-major-project-da0d0.firebaseapp.com",
    projectId: "final-major-project-da0d0",
    storageBucket: "final-major-project-da0d0.appspot.com",
    messagingSenderId: "355893525002",
    appId: "1:355893525002:web:773228cc1f75156015fdf3",
    measurementId: "G-D6YXRDBFT5"
};

const firebase = Firebase.initializeApp(config);
const db = firebase.firestore();
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };

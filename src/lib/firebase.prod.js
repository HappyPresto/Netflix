import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDGcmjiXof9q1nHVAyqvO2fVSLnorNQ4D4",
    authDomain: "netflix-2933b.firebaseapp.com",
    projectId: "netflix-2933b",
    storageBucket: "netflix-2933b.appspot.com",
    messagingSenderId: "444323601235",
    appId: "1:444323601235:web:842a61069d8a57940d5fa6",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
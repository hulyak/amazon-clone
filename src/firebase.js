import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDJM1qa9AZicVKLx9N1a6veesJ4C-YChzU',
  authDomain: 'ch-71634.firebaseapp.com',
  databaseURL: 'https://ch-71634.firebaseio.com',
  projectId: 'ch-71634',
  storageBucket: 'ch-71634.appspot.com',
  messagingSenderId: '1098580080808',
  appId: '1:1098580080808:web:cbc99575fb61223f4f6a9d',
  measurementId: 'G-E0039XMYX6',
};

// set up firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// set up database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

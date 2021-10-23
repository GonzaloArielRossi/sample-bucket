import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCGU81uVY3aJXYP7XFAo4Z9dNoXfnC7-FE',
  authDomain: 'sample-bucket-5d173.firebaseapp.com',
  projectId: 'sample-bucket-5d173',
  storageBucket: 'sample-bucket-5d173.appspot.com',
  messagingSenderId: '920073897197',
  appId: '1:920073897197:web:ef9d6f3459367c6152f8e4'
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app);
};

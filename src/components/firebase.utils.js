import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVSbdWiJFzQJNfSZD8NQ8cV6Nexxp5QIo",
    authDomain: "e-demo-8d9f1.firebaseapp.com",
    projectId: "e-demo-8d9f1",
    storageBucket: "e-demo-8d9f1.appspot.com",
    messagingSenderId: "792330565023",
    appId: "1:792330565023:web:6bdc3492ec533f6537f9aa",
    measurementId: "G-74DTXX0ZYN"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;//from firebase

  const userRef = firestore.doc(`users/${userAuth.uid}`);//doc reference is used fix this issue

  const snapShot = await userRef.get();//snapshot for actual data

  if (!snapShot.exists) {//if user doesnot exist create new and add it to users collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
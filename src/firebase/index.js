import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCo8Uspgg6gPO7-5-5laQIwrONdhLwCI5A",
  authDomain: "jett-clothing.firebaseapp.com",
  projectId: "jett-clothing",
  storageBucket: "jett-clothing.appspot.com",
  messagingSenderId: "761158595070",
  appId: "1:761158595070:web:e4c60c1a6202f7eca610af",
  measurementId: "G-LEN0GCD15N",
};

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      const userRefProps = { displayName, email, createdAt, ...additionalData };
      await userRef.set(userRefProps);
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, firestore, signInWithGoogle, createUserProfileDocument };
export default firebase;
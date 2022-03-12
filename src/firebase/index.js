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

const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);
const auth = firebase.auth();
const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export { auth, firestore, googleProvider };
export {
  signInWithGoogle,
  createUserProfileDocument,
  addCollectionAndDocuments,
  convertCollectionsSnapshotToMap,
  getCurrentUser,
};
export default firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBPAUarEwAY1SVEmDRtKqtstLXbbDXgHNo",
  authDomain: "portafolio-8bba5.firebaseapp.com",
  projectId: "portafolio-8bba5",
  storageBucket: "portafolio-8bba5.appspot.com",
  messagingSenderId: "46660839740",
  appId: "1:46660839740:web:24afa3612b27e31cd31639"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
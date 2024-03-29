import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyD50LXVPsz3mDrSwCrmcpy-RDsfk5NFYGs",
  authDomain: "firevuechat-ab4ba.firebaseapp.com",
  projectId: "firevuechat-ab4ba",
  storageBucket: "firevuechat-ab4ba.appspot.com",
  messagingSenderId: "419891412746",
  appId: "1:419891412746:web:6aea61ab8a2184330644f3",
};

const app = firebase.initializeApp(config);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = firebase.database();

export { auth, provider, db };

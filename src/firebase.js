import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCCjSiXLvXQ0qm4M_Jy39JSb5g2oy5VofM",
    authDomain: "slack-clone-yt-a3c3e.firebaseapp.com",
    projectId: "slack-clone-yt-a3c3e",
    storageBucket: "slack-clone-yt-a3c3e.appspot.com",
    messagingSenderId: "622152352600",
    appId: "1:622152352600:web:16b8b092002b7893889b2d"
  };  


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { firebaseApp, db, auth, provider}
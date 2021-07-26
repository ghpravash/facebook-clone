import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDlBt2pEdrvb2NcE0xNA7NYaZI_zSgsgoE",
    authDomain: "fb-react-20a1b.firebaseapp.com",
    projectId: "fb-react-20a1b",
    storageBucket: "fb-react-20a1b.appspot.com",
    messagingSenderId: "200128892259",
    appId: "1:200128892259:web:b072e702471bed2575d756",
    measurementId: "G-8V2HJEG8J1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
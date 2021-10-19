import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "foss-rsvp.firebaseapp.com",
  projectId: "foss-rsvp",
  storageBucket: "foss-rsvp.appspot.com",
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
// const usersCollection = db.collection("users");
const eventsCollection = db.collection("events");

// export utils/refs
export {
  db,
  auth,
  //   usersCollection,
  eventsCollection,
};

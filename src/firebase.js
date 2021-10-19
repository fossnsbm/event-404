import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "foss-rsvp.firebaseapp.com",
  projectId: "foss-rsvp",
  storageBucket: "foss-rsvp.appspot.com",
  messagingSenderId: process.env.VUE_APP_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
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

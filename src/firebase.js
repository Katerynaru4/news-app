import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyASkvtR_OMZ1wz5OMb-yWthyTiWesHugGA",
  authDomain: "auth-4283a.firebaseapp.com",
  projectId: "auth-4283a",
  storageBucket: "auth-4283a.appspot.com",
  messagingSenderId: "133281709240",
  appId: "1:133281709240:web:175bbfb03b5c534ec3884d",
});

export const auth = app.auth();
export default app;

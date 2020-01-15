import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAyA7zVchxkSzMa7Dcp7AiLcccz-GcjL2o",
  authDomain: "beewebintership.firebaseapp.com",
  databaseURL: "https://beewebintership.firebaseio.com",
  projectId: "beewebintership",
  storageBucket: "beewebintership.appspot.com",
  messagingSenderId: "1036683556367",
  appId: "1:1036683556367:web:e3abab1d3f2c423ffb557a",
  measurementId: "G-JB7TQ9GXEC"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BAXp1DNTlOBqkWyvNdeEOv3cDmLboz5za9jVqkCI6MRINzgwUpfbio6T39rxP-os2o6RCbV1SnpIAP_dRHSRyyU"
);
export { messaging };

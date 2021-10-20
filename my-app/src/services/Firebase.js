import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA81rtLuGVqC_AD6hzFJo2cx8cIITVCLqc",
  authDomain: "bakest-4a0c5.firebaseapp.com",
  projectId: "bakest-4a0c5",
  storageBucket: "bakest-4a0c5.appspot.com",
  messagingSenderId: "1074039380519",
  appId: "1:1074039380519:web:a6def6f95772d299d44c02"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
  return firebase.firestore(app)
}
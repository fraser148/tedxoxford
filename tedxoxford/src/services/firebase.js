import firebase           from 'firebase';
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyAfp3WVs-z_EjbTQHNn1tc4NgXiCHulHW0",
    authDomain: "tedxoxford-96eec.firebaseapp.com",
    projectId: "tedxoxford-96eec",
    storageBucket: "tedxoxford-96eec.appspot.com",
    messagingSenderId: "300122833533",
    appId: "1:300122833533:web:8f828d03513067bdfc2714",
    measurementId: "G-ZM02K8JDKJ"
};
  
firebase.initializeApp(config);
  
export const auth = firebase.auth();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider)
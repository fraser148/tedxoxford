import { initializeApp } from 'firebase/app';
import { getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    sendPasswordResetEmail } from "firebase/auth";
    import { getStorage } from "firebase/storage";

const config = {
    apiKey: "AIzaSyAfp3WVs-z_EjbTQHNn1tc4NgXiCHulHW0",
    authDomain: "tedxoxford-96eec.firebaseapp.com",
    projectId: "tedxoxford-96eec",
    storageBucket: "tedxoxford-96eec.appspot.com",
    messagingSenderId: "300122833533",
    appId: "1:300122833533:web:8f828d03513067bdfc2714",
    measurementId: "G-ZM02K8JDKJ"
};
  
initializeApp(config);
  
export const auth = getAuth();
export const storage = getStorage();

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(provider)
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCEQHu4mb8PnWIgUojbup3eAg7k3B8W-t8",
    authDomain: "mindfull-sns.firebaseapp.com",
    projectId: "mindfull-sns",
    storageBucket: "mindfull-sns.appspot.com",
    messagingSenderId: "673178573790",
    appId: "1:673178573790:web:85393c3a44fc3285bb5b4f"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};

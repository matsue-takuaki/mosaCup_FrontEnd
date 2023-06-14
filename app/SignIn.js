import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from './firebase';

function SignIn() {
    function signInWithGoogle(){
        // console.log("123");
        signInWithPopup(auth,provider);
    }
  return (
    <div>
        <button onClick={signInWithGoogle()}>ログイン</button>
    </div>
  )
}

export default SignIn
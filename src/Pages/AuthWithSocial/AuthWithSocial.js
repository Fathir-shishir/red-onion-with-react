import React from 'react';
import { GoogleAuthProvider,getAuth, signInWithPopup,FacebookAuthProvider } from "firebase/auth";
import app from '../../firebase.init';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const Fbprovider = new FacebookAuthProvider();


const AuthWithSocial = () => {
    const handleGoogleSignin =()=>{
      signInWithPopup(auth, googleProvider)
     .then((result) => {
    const user = result.user;
    console.log(user)
  }).catch((error) => {
    console.log(error)
  });
    }
    const handleFbSignin =()=>{
        signInWithPopup(auth, Fbprovider)
  .then((result) => {
    const user = result.user;
    console.log(user)
  }).catch((error) => {
    console.log(error)
  });
    }
    return (
        <div  className='w-50 mx-auto'>
        <div className='d-flex w-100 align-items-center'>
            <div style={{height : '1px'}} className='bg-primary w-50' > </div>
            <div>
                <p className='mt-2 px-2'>or</p>
            </div>
            <div style={{height : '1px'}} className='bg-primary w-50'></div>
        </div>
        <div>
            <button onClick={handleGoogleSignin} className='border-0  mt-2 px-3 py-2 d-block mx-auto w-50'>
                Google Sign IN
            </button>
            <button onClick={handleFbSignin} className='border-0 mt-2 px-3 py-2 d-block mx-auto  w-50'>
                Facebook Sign IN
            </button>
            <button className='border-0 mt-2 px-3 py-2 d-block mx-auto  w-50 '>
                Git Sign IN
            </button>
        </div>
            
        </div>
    );
};

export default AuthWithSocial;
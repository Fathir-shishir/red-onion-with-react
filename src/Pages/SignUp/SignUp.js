import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import app from '../../firebase.init';
import AuthWithSocial from '../AuthWithSocial/AuthWithSocial';
const auth = getAuth(app);

const SignUp = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[confirmpassword,setConfirmpassword] = useState('')
    const[error,setError] = useState('')
    const[terms,setTerms] = useState(false)

    const handelNameBlur =event=>{
        setName(event.target.value)
    }
    const handelEmailBlur =event=>{
        setEmail(event.target.value)
    }
    const handelPasswordlBlur =event=>{
        setPassword(event.target.value)
    }
    const handelConfirmPasswordlBlur =event=>{
        setConfirmpassword(event.target.value)
    }
    const handelFromSubmit= event=>{
        event.preventDefault();
        if( password === confirmpassword ){
            createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           console.log( userCredential.user)
           
          })
          .catch((error) => {
           console.log(error)
          });
            
        } else{
           
          setError("Your password did't match")
          return
        }
        
    
    // console.log(name,email,password)
    }

   

    return (
        <div className='mt-3'>
        <p className='text-center'>{error}</p>
    <Form className='w-50 mx-auto mt-4 border border-3 p-5' onSubmit={handelFromSubmit}>
        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control onBlur={handelNameBlur} type="text" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email"  required/>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control onBlur={handelPasswordlBlur} type="password" placeholder="Password"  required/>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control onBlur={handelConfirmPasswordlBlur} type="password" placeholder="Confirm Password"  required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={()=>setTerms(!terms)} type="checkbox" className={terms? 'text-primary': 'text-danger'}
        label="Terms and Condition"  />
        </Form.Group>
         
        <Button disabled={!terms} className='d-block mx-auto w-50 text-black btn-success' variant="primary" type="submit">
        <h4>Register</h4>
        </Button>
        <div className='mt-3 w-100'>
        
        </div>
    </Form>
    <AuthWithSocial></AuthWithSocial>
    
        </div>
    );
};

export default SignUp;
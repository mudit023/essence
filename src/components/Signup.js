import React from 'react'
import { Form, Button, Card} from "react-bootstrap"
import { Route, Routes, Link } from 'react-router-dom';
// import {app} from "../firebase"
import Login from './Login';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { handleInputs } from "../App";

function Signup() {
  
  const auth = getAuth();
  let email ='';
  let password='';
  function handleEmail(e){
    // e.preventDefault();
    email = e.target.value;
    console.log(`${email}`);
  }
  function handlePassword(e){
    // e.preventDefault();
    password = e.target.value
    console.log(`${password}`);
  }
  function handleSubmit(){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            {/* ref={emailRef} */}
            <Form.Control type="email" required onChange={e => handleEmail(e)} />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            {/* ref={passwordRef} */}
            <Form.Control type="password"  required onChange={e => handlePassword(e)} />
          </Form.Group>
          {/* <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            ref={passwordConfirmRef}
            <Form.Control type="password"  required />
          </Form.Group> */}
          <Button className="w-100 mt-4" type="submit">
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
     have an account?<Link to="/login"> Log In</Link>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </>
  )
}

export default Signup
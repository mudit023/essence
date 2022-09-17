import React from 'react'
import { Form, Button, Card} from "react-bootstrap"
import { Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() {
  
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
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);

    });
  }
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
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
            Log In
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Don't have an account?<Link to="/signup"> Sign Up</Link>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes> 
    </div>
  </>
  )
}

export default Login
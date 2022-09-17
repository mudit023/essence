// import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import Signup from "./components/Signup";
import Login from './components/Login'
import Home from './components/Home'
import { Route, Routes, Link } from 'react-router-dom';
import app from './firebase'
// import { useNavigate } from "react-router-dom";
// import {auth} from './firebase';
import './App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          {/* <li>
            {!isAuth ? <Link to="/login">Login</Link> :<button onClick={signUserOut}>Log Out</button> }
          </li> */}
        </ul>
      </nav>
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup/*" element={<Signup/>} />
      <Route path="/login/*" element={<Login/>} />
    </Routes>
      </div>
    </Container>
    </>
  );
}

export default App;

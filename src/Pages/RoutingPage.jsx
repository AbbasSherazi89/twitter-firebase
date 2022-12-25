import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../Components/Login";
import Register from "../Components/Register";
//
import { db } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";
import Home from "./Home";

//
const RoutingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  
  const handleAction = (id) => {
    console.log(id);
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate("/home");
          sessionStorage.setItem("user", res._tokenResponse.RefreshToken);
        })
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            toast.error("Check the password");
          }
          if (e.code === "auth/user-not-found") {
            toast.error("Check the email");
          }
        });
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate("/");
          sessionStorage.setItem("user", res._tokenResponse.RefreshToken);
          addDoc(collection(db, "user"), {
            email: email,
            gender:gender,
            age:age,
            password: password,
          });
          toast.info("created Successfully");
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };
  return (
    <>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              setEmail={setEmail}
              setPassword={setPassword}
              setGender={setGender}
              setAge={setAge}
              handleAction={() => handleAction(2)}
            />
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer/>
    </>
  );
};

export default RoutingPage;

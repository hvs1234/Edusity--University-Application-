// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./Components/SignUp";
import Private from "./Components/Private";
import Login from "./Components/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

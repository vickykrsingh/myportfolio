import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Pages/js/Home.js";
import About from "./Pages/js/About.js";
import Contact from "./Pages/js/Contact.js";
import Projects from "./Pages/js/Projects.js";
import Navbar from "./Components/js/Navbar";
import Login from "./Pages/js/Login";
import Register from "./Pages/js/Register";
import ProjectUpload from "./Pages/js/projectUpload";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Projects />} path="/projects" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<ProjectUpload />} path="/upload" />
        </Routes>
      </Router>
    </>
  );
}

export default App;

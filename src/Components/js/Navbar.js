import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Css/Navbar.css";
import ContactForm from "./ContactForm";

export default function Navbar(props) {
  const [menu, setMenu] = useState(false);
  const [model, setModel] = useState(false);
  const toggleMenu = () => {
    if (menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  const showModel = () => {
    if (model === false) {
      setModel(true);
    }
  };
  const closePopup = () => {
    const myModel = document.getElementById("popupModel");
    if (myModel.style.display === "flex") {
      myModel.style.display = "none";
      setModel(false);
    }
  };
  return (
    <>
      <nav className="navbar">
        <div
          className="popupModel"
          id="popupModel"
          style={{ display: `${model ? "flex" : "none"}` }}
        >
          <div className="cross-icon-model" onClick={closePopup}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ContactForm width="80%" height="60vh" className="model" />
        </div>
        <section>
          <section className="nav-left">
            <section className="logo">
              <h1>MR. VICKY</h1>
            </section>
            <ul className={` menubar ${menu ? "menubarShow" : "menubarHide"}`}>
              <li>
                <Link to="/">
                  <i className="fa-solid fa-house nav-icon"></i>{" "}
                  <span className="links" onClick={() => setMenu(false)}>
                    HOME
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa-solid fa-user nav-icon"></i>{" "}
                  <span className="links" onClick={() => setMenu(false)}>
                    ABOUT
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="fa-solid fa-square-phone nav-icon"></i>{" "}
                  <span className="links" onClick={() => setMenu(false)}>
                    CONTACT
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <i className="fa-solid fa-book-open-reader nav-icon"></i>{" "}
                  <span className="links" onClick={() => setMenu(false)}>
                    PROJECTS
                  </span>
                </Link>
              </li>
            </ul>
          </section>
          <section
            className={`message ${menu ? "messageShow" : "messageHide"}`}
          >
            <button onClick={showModel}>
              <i
                className="fa-solid fa-message message-icon"
                onClick={() => setMenu(false)}
              ></i>
            </button>
          </section>

          <section className={`barSection`} onClick={() => toggleMenu()}>
            <i
              className={`${
                menu
                  ? "fa-solid fa-xmark cross-icon"
                  : "fa-solid fa-bars bar-icon"
              }`}
            ></i>
          </section>
        </section>
      </nav>
      <Outlet />
    </>
  );
}

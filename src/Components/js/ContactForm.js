import React, { useState } from "react";
import "../Css/ContactForm.css";

export default function ContactForm(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [query, setQuery] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [checkSubmit, setCheckSubmit] = useState(true);

  const submitData = async (event) => {
    event.preventDefault();
    setDisableSubmit(true);
    await fetch(
      "https://vickyportfolioweb-default-rtdb.firebaseio.com/vickyportfolioweb.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          subject,
          query,
        }),
      }
    );
    setDisableSubmit(false);
    setCheckSubmit(true);
    setFullName("");
    setEmail("");
    setSubject("");
    setQuery("");
    setCheckSubmit(false);
    setInterval(() => {
      setCheckSubmit(true);
    }, 1000);
  };

  return (
    <>
      <div
        className="main-form"
        style={{ width: `${props.width}`, minHeight: `${props.height}` }}
      >
        <form className="contact-form" method="POST" onSubmit={submitData}>
          <div className="contact-right">
            <div className="fullNameSection">
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                required
                onChange={(event) => {
                  setFullName(event.target.value);
                }}
              />
              <label htmlFor="" className={`${fullName ? "up" : ""}`}>
                Enter Name
              </label>
            </div>
            <div className="emailSection">
              <input
                type="email"
                name="email"
                id="fullName"
                value={email}
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label htmlFor="" className={`${email ? "up" : ""}`}>
                Enter Email
              </label>
            </div>
            <div className="subjectSection">
              <input
                type="subject"
                name="subject"
                id="fullName"
                value={subject}
                required
                onChange={(event) => setSubject(event.target.value)}
              />
              <label htmlFor="" className={`${subject ? "up" : ""}`}>
                Enter Subject
              </label>
            </div>
            <div className="querySection">
              <textarea
                name="query"
                id="query"
                required
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <label htmlFor="" className={`${query ? "up" : ""}`}>
                Enter Query
              </label>
              <br />
            </div>
            <button
              type="submit"
              id="submitButton"
              disabled={disableSubmit ? true : false}
            >
              {checkSubmit ? "Send Message" : " Query submitted Successfully"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

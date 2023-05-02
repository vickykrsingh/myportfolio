import React, { useState } from "react";
import Corners from "../../Components/js/Corners";
import '../Css/Register.css'

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const [answer,setAnswer] = useState("")
  return (
    <>
      <section className="section register">
        <section className="register-corners">
          {/* <Corners /> */}
          {/* <div className="form-wrapper"> */}
            <form action="" className="form-wrapper">
              <div className="form-top">
                <div className="form-heading-wrapper">
                  <h2 className="form-heading">Register</h2>
                </div>
              </div>
              <div className="form-bottom">
                <div className="input-wrapper">
                    <label htmlFor="" className={`${fullName ? 'shiftUp' : ''}`} >Enter Name</label>
                    <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="" className={`${email ? 'shiftUp' : ''}`} >Enter Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="" className={`${phone ? 'shiftUp' : ''}`} >Enter Phone</label>
                    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="" className={`${password ? 'shiftUp' : ''}`} >Enter Password</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="" className={`${answer ? 'shiftUp' : ''}`} >Your Favorite Sports</label>
                    <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} />
                </div>
                <div className="submit-wrapper">
                  <button type="submit">Register</button>
                </div>
              </div>
            </form>
          {/* </div> */}
        </section>
      </section>
    </>
  );
}

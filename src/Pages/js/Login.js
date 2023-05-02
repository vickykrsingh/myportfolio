import React,{useState} from 'react'
import '../Css/Register.css'

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  return (
    <>
      <section className="section register">
        <section className="register-corners">
          {/* <Corners /> */}
          {/* <div className="form-wrapper"> */}
            <form action="" className="form-wrapper">
              <div className="form-top">
                <div className="form-heading-wrapper">
                  <h2 className="form-heading">Login</h2>
                </div>
              </div>
              <div className="form-bottom">
                <div className="input-wrapper">
                    <label htmlFor="" className={`${email ? 'shiftUp' : ''}`} >Enter Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="" className={`${password ? 'shiftUp' : ''}`} >Enter Password</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="submit-wrapper">
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
          {/* </div> */}
        </section>
      </section>
    </>
  );
}

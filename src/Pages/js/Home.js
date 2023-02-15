import React from "react";
import "../Css/Home.css";
import Corners from "../../Components/js/Corners.js";
import heroImg from "../../images/myimg.jpg";

export default function Home() {
  return (
    <>
      <section className="home section">
        <main className="home-corners">
          <Corners />
          <div className="home-left">
            <h1>VICKY KUMAR</h1>
            <p>
              Your awesome <span>MERN</span> App Developer
            </p>
            <p>Less Code | Awesome Design | Better SEO </p>
            <div className="main-btn">
              <a download={true} href="../../Data/certificate.pdf">Resume</a>
              <a href="/contact">Hire Me</a>
            </div>
          </div>
          <div className="home-right">
            <img src={heroImg} alt="HeroImage" />
          </div>
        </main>
      </section>
    </>
  );
}

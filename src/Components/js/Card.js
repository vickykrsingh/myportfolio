import React from "react";
import "../Css/Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="cardContent">
          <h3>{props.head}</h3>
          <p>{props.desc}</p>
          <a href={props.srcLink} target="_blank" rel="noopener noreferrer">
            Explore
          </a>
        </div>
        <img src={props.img} alt="Notes" />
      </div>
    </>
  );
}

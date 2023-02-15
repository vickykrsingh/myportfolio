import React from "react";
import Corners from "../../Components/js/Corners";
import "../Css/Projects.css";
import Card from "../../Components/js/Card.js";
import ProjectData from "../../Data/data.json";

export default function Projects() {
  return (
    <>
      <section className="section projects">
        <section className="projects-corners">
          <Corners />
          {ProjectData.map((ele) => {
            return (
              <div key={ele.projectId}>
                <Card
                  img={ele.imgSrc}
                  srcLink={ele.linkSrc}
                  head={ele.projectHeading}
                  desc={ele.projectDesc}
                />
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
}

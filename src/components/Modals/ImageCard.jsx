import React from "react";
// import HeroImage from "../../images/Fiveminutes_hero.jpg";
import AudioPlayer from "../pages/AudioPlayer";
import audioData from "../../Data/AudioData";

function ImageCard({ title, description }) {

     const  HeroImage ="/images/Fiveminutes_hero.jpg"
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
    padding: "130px",
    marginTop: "20px",
    borderRadius: "10px",
  };

  const titleStyle = {
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontStyle: "italic",
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "10px",
  };

  return (
    <div className="Hero_section" style={heroStyle}>
      <h6 style={titleStyle}>{title}</h6>
      <p style={descriptionStyle}>
        <i>{description}</i>
      </p>
      <AudioPlayer audioFiles={audioData} />
    </div>
  );
}

export default ImageCard;

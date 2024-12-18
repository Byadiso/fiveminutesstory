import React from "react";
import HeroImage from "../../images/Fiveminutes_hero.jpg";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import { Link } from "react-router-dom";

import Audio1 from "../../Audio/Audio1.mp3";
import Audio2 from "../../Audio/Audio2.mp3";
import Audio3 from "../../Audio/Audio3.mp3";
import Audio4 from "../../Audio/grateful.mp3";
import Audio5 from "../../Audio/wepray.mp3";

import AudioPlayerSingle from "../pages/AudioPlayer";
// import AudioBackgroundImage from "../../images/Fiveminutes_hero.jpg"

function ImageCard({ title, description }) {
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
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

  const audioFiles = [
    // Audio1,
    // Audio2,
    // Audio3,
    Audio4,
    Audio5,
  ];

  return (
    <div className="Hero_section" style={heroStyle}>
      <h1>{title} </h1>
      <p><i>{description}</i></p>
      <AudioPlayerSingle audioFiles={audioFiles} />
   
    </div>
  );
}

export default ImageCard;

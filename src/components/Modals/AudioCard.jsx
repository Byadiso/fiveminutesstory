import React from 'react';
import HeroImage from '../../images/Background.jpg'; 
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Colors from '../../Style/Colors';
import { Link } from 'react-router-dom';
import AudioPlayer from '../pages/AudioPlayer';
import Audio1 from "../../Audio/Audio1.mp3";
// import AudioBackgroundImage from "../../images/Fiveminutes_hero.jpg"

function AudioCard({audioSrc,title, description}) {
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '60vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', 
    textShadow: '2px 2px 8px rgba(0,0,0,0.7)', 
    padding: '70px', 
    marginTop: '20px',
    borderRadius: "10px",    
    };

  return (
    <div className="Hero_section" style={heroStyle}>
      <h1>{title} </h1>
      <p>
        {description}
      </p>
      
      <AudioPlayer 
             audioSrc={audioSrc}                  
            
          />
    </div>
  );
}

export default AudioCard;

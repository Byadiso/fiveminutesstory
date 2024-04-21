import React from 'react';
import HeroImage from '../../images/Fiveminutes_hero.jpg'; 
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

function ImageCard() {
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: 'cover', // Cover the entire area of the div
    backgroundPosition: 'center', // Center the background image
    height: '100vh', // Set a full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', 
    textShadow: '2px 2px 8px rgba(0,0,0,0.7)', 
    padding: '20px', 
  };

  return (
    <div className="Hero_section" style={heroStyle}>
      <h1>Good morning Amy</h1>
      <p>
        Start your day with a smile. We've got some feel-good stories to
        help you wake up on the right side of the bed
      </p>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab variant="extended" size="medium" color="primary">
          Play
        </Fab>
      </Box>
    </div>
  );
}

export default ImageCard;
import "../../Style/NowPlaying.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../firebase/Authentication";
import NavBar from "./Navbar";
import Footer from "./Footer";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import AudioPlayer from "./AudioPlayerSingle.jsx";
// import Audio1 from "../../Audio/Audio1.mp3";
// import imageRelated from "../../images/Fiveminutes_hero.jpg";
import audioData from "../../Data/AudioData.js";

function NowPlaying() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const  imageRelated ="/images/Fiveminutes_hero.jpg"

  const Audio = audioData[4];

  useEffect(() => {
    isAuthenticated(setIsLoggedIn);
  }, []);
  return (
    <div>
      <NavBar />
      <div className="main_Landing">
        <div className="play_container">
          <>
            <h3>The last of us : A Journey into the Post Apocalyptic west</h3>
            <p>" {Audio.name} "</p>
            <div className="player">
              <AudioPlayer audioSrc={Audio} />

              <div
                className="play_description"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  alignContent: "start",
                  width: "100%",
                  paddingLeft: "100px",
                  paddingRight: "100px",
                }}
              >
                <h4>
                  The last of us : A Journey into the Post Apocalyptic west
                </h4>
                <p>
                  The Last of Us: A Journey into the Post-Apocalyptic West**
                  This immersive narrative takes you on a gripping adventure
                  through a desolate, post-apocalyptic landscape. Set in a world
                  where civilization has collapsed, humanity's struggle for
                  survival unfolds across vast, hauntingly beautiful terrains.
                  The story follows the journey of resilient survivors as they
                  navigate dangerous environments, face ruthless threats, and
                  form unlikely bonds in a world where the remnants of society
                  clash with the harsh realities of the new order. Prepare to
                  witness an emotional and action-packed exploration of
                  survival, sacrifice, and the enduring spirit of hope in a
                  shattered world.
                </p>
              </div>
              <div
                className="play_related"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  alignContent: "start",
                  width: "100%",
                  paddingLeft: "100px",
                  paddingRight: "100px",
                }}
              >
                <h4>Related Stories</h4>

                <div className="related_item">
                  <img src={imageRelated} alt="relatedImage"></img>
                  <div>
                    <p>
                      The last of us : A Journey into the Post Apocalyptic west
                    </p>
                    <div style={{display:"flex", flexDirection:"row"}}>
                      <p className="timer">1 hour , 27 minutes</p>
                      <PlayCircleIcon />
                    </div>
                  </div>
                  
                </div>
                <div className="related_item">
                  <img src={imageRelated} alt="relatedImage"></img>
                  <div>
                    <p>
                      The last of us : A Journey into the Post Apocalyptic west
                    </p>
                    <div style={{display:"flex", flexDirection:"row"}}>
                      <p className="timer">1 hour , 27 minutes</p>
                      <PlayCircleIcon />
                    </div>
                  </div>
                  
                </div>
                <div className="related_item">
                  <img src={imageRelated} alt="relatedImage"></img>
                  <div>
                    <p>
                      The last of us : A Journey into the Post Apocalyptic west
                    </p>
                    <div style={{display:"flex", flexDirection:"row"}}>
                      <p className="timer">1 hour , 27 minutes</p>
                      <PlayCircleIcon />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NowPlaying;

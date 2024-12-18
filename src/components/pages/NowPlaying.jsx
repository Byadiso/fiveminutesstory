import "../../Style/NowPlaying.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../firebase/Authentication";
import NavBar from "./Navbar";
import ImageCard from "../Modals/ImageCard.jsx";
import MicNoneIcon from "@mui/icons-material/MicNone";
import Footer from "./Footer";
import BookIcon from "@mui/icons-material/Book";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AudioCard from "../Modals/ImageCard.jsx";

import AudioPlayer from "./AudioPlayerSingle.jsx";
import AudioPlayerSingle from "./AudioPlayer.jsx";
import Audio1 from "../../Audio/Audio1.mp3";
import imageRelated from "../../images/Fiveminutes_hero.jpg"

function NowPlaying() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const title = "Playing from recently played";
  const description = "Yes, this is the story behing everyda day";

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
            <p>The last of US</p>
            <div className="player">
              <AudioPlayer audioSrc={Audio1} />

              <div
                className="play_description"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  alignContent: "start",
                  width: "100%",
                  paddingLeft: "200px",
                  paddingRight: "200px",
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
                }}
              >
                <div>
                  <h4>Related Stories</h4>
                </div>
                <div className="related_item">
                  <img src={imageRelated} alt="relatedImage"></img>
                  <div>
                    <p>The last of us : A Journey into the Post Apocalyptic west</p>
                    <p className="timer">1 hour , 27 minutes</p>
                  </div>
                 
                </div>
                <div className="related_item">
                  <img src={imageRelated} alt="relatedImage"></img>
                  <div>
                    <p>The last of us : A Journey into the Post Apocalyptic west</p>
                    <p className="timer">1 hour , 27 minutes</p>
                  </div>
                 
                </div>
                <div className="related_item">
                  <img src={imageRelated} alt="relatedImage"></img>
                  <div>
                    <p>The last of us : A Journey into the Post Apocalyptic west</p>
                    <p className="timer">1 hour , 27 minutes</p>
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

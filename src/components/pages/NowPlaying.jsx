import "../../Style/LandingPage.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../firebase/Authentication";
import NavBar from "./Navbar";
import ImageCard from "../Modals/AudioCard";
import MicNoneIcon from "@mui/icons-material/MicNone";
import Footer from "./Footer";
import BookIcon from "@mui/icons-material/Book";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AudioCard from "../Modals/AudioCard.jsx";
import Audio1 from "../../Audio/Audio2.mp3";
import AudioPlayer from "./AudioPlayer.jsx";

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
          <div>
          <AudioPlayer audioSrc={Audio1}
            />
          </div>
          <div>
            <h2>The last of us : A Journey into the Post Apocalyptic west</h2>
            <p>The last of US</p>
            <div className="Controllers">
              <div className="play_buttons">This is Controllers buttong</div>
              <div className="progression_play">This progress bar</div>
              <div className="play_description">
                <h2>This is the header</h2>
                <p>This is the content</p>
              </div>
              <div className="play_related">
                <div className="related_item">
                  <img src="http://placehold.it"></img>
                  <p>This is the content</p>
                  <p>1 hour , 27 minutes</p>
                </div>
                <div className="related_item">
                  <img src="http://placehold.it"></img>
                  <p>This is the content</p>
                  <p>1 hour , 27 minutes</p>
                </div>
                <div className="related_item">
                  <img src="http://placehold.it"></img>
                  <p>This is the content</p>
                  <p>1 hour , 27 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NowPlaying;

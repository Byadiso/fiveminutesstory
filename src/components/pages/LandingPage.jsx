import "../../Style/LandingPage.css";
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../firebase/Authentication";
import NavBar from "./Navbar";
import ImageCard from "../Modals/ImageCard";
import storyImage1 from "../../images/Fiveminutes_hero.jpg";
import MicNoneIcon from "@mui/icons-material/MicNone";
import Footer from "./Footer";
import BookIcon from "@mui/icons-material/Book";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";

import Colors from "../../Style/Colors";
import { Link } from "react-router-dom";
import AudioCard from "../Modals/ImageCard";
import CategoryContainer from "./CategoryContainer";
import StoryGenre from "./StoryGenre";
import RecentlyPlayed from "./RecentlyPlayed";
import AudioPlayerSingle from "./AudioPlayer";

import Audio1 from "../../Audio/Audio1.mp3";
import Audio2 from "../../Audio/Audio2.mp3";
import Audio3 from "../../Audio/Audio3.mp3";

function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const title = "Good Morning Desire";
  const description =
    "Start your day with a smile. We've got some feel-good stories to help you wake up on the right side of the bed";
  const audioFiles = [Audio1, Audio2, Audio3];

  useEffect(() => {
    isAuthenticated(setIsLoggedIn);
  }, []);

  return (
    <div>
      <NavBar />

      <div className="main_Landing">
        <div className="Hero_section">
          <ImageCard title={title} description={description} />
        </div>

        <CategoryContainer />

        <StoryGenre />

        <RecentlyPlayed />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;

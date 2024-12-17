import "../../Style/LandingPage.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../firebase/Authentication";
import NavBar from "./Navbar";
import ImageCard from "../Modals/AudioCard";
import storyImage1 from "../../images/Fiveminutes_hero.jpg";
import MicNoneIcon from '@mui/icons-material/MicNone';
import Footer from "./Footer";
import BookIcon from '@mui/icons-material/Book';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from "@mui/icons-material/Search";

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isAuthenticated(setIsLoggedIn);
  }, []);
  return (
    <div>
      <NavBar />
      <div className="main_Landing">
        <div className="Hero_section">
          <ImageCard />
        </div>
        <div
          className="Category_list"          
        >
          <h4>Featured</h4>
          <h4>New & Notable</h4>
          <h4>Trending</h4>
          <h4>For You</h4>
        </div>
        <div className="Main_stories">
          <h3>Featured</h3>
          <div
            className="Stories_container"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <p>The way I heard it</p>
            </div>
          </div>
        </div>
        <h3>Story telling Genre</h3>

        <div className="Story_genres" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <p><BookIcon/>Fiction</p>
          <p><MicNoneIcon/> Non-fiction</p>
          <p><SentimentSatisfiedAltIcon/> Comedy</p>
          <p><FavoriteBorderIcon/> Drama</p>
          <p><MicNoneIcon/> True Crime</p>
          <p><SearchIcon/> Mystery</p>
          <p><MicNoneIcon/> Biography</p>
          <p><MicNoneIcon/> Sci-Fi</p>

        </div>


        <div className="Main_stories">
          <h3>Recently played</h3>
          <div
            className="Stories_container"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <p>The way I heard it</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;

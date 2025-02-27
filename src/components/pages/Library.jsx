import "../../Style/LandingPage.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../firebase/Authentication";
import NavBar from "./Navbar";
import ImageCard from "../Modals/ImageCard";
// import storyImage1 from "../../images/Fiveminutes_hero.jpg";
import MicNoneIcon from "@mui/icons-material/MicNone";
import Footer from "./Footer";
import BookIcon from "@mui/icons-material/Book";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import Colors from "../../Style/Colors";

function Library() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const  storyImage1 ="public/images/Fiveminutes_hero.jpg"

  useEffect(() => {
    isAuthenticated(setIsLoggedIn);
  }, []);
  return (
    <div>
      <NavBar />
      <div className="main_Landing">
        <h3>Explore</h3>

        <div
          className="Story_genres"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            <BookIcon />
            Fiction
          </p>
          <p>
            <MicNoneIcon /> Non-fiction
          </p>
          <p>
            <SentimentSatisfiedAltIcon /> Comedy
          </p>
          <p>
            <FavoriteBorderIcon /> Drama
          </p>
          <p>
            <MicNoneIcon /> True Crime
          </p>
          <p>
            <SearchIcon /> Mystery
          </p>
          <p>
            <MicNoneIcon /> Biography
          </p>
          <p>
            <MicNoneIcon /> Sci-Fi
          </p>
        </div>

        <div className="Main_stories">
          <h3>Recommended for you</h3>
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
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Comedy</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Comedy</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Comedy</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Comedy</p>
            </div>
          </div>
        </div>
        <div className="Main_stories">
          <h3>Featured Series</h3>
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
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Comedy</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Comedy</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Comedy</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Comedy</p>
            </div>
          </div>
        </div>

        <div className="Main_stories">
          <h3>Channels</h3>
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
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Horror</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Mystery</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Science Fiction</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} />
              <h5>The way I heard it</h5>
              <p style={{ color: Colors.TextColor }}>Comedy</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Library;

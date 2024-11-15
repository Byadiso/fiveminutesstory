import "../../Style/LandingPage.css";
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../firebase/Authentication";
import NavBar from "./Navbar";
import ImageCard from "../Modals/ImageCard";
import storyImage1 from "../../images/Fiveminutes_hero.jpg";
import MicNoneIcon from '@mui/icons-material/MicNone';
import Footer from "./Footer";
import BookIcon from '@mui/icons-material/Book';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from "@mui/icons-material/Search";

import Colors from "../../Style/Colors"



function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isAuthenticated(setIsLoggedIn);
  }, []);

  return (
    <div>
      <NavBar/>
      
      <div className="main_Landing">
        <div className="Hero_section">
          <ImageCard />
        </div>
        <div className="Category_list"          
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
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, auto)',
              gap: '10px',
              justifyItems: 'center',
              alignItems: 'center',       
              padding: '10px', 
            }}
          >
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
          </div>
        </div>

      

        <div className="Story_genres" >
              <h3 >Story telling Genre</h3>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
              <p><BookIcon sx={{ color: Colors.WhiteColor, marginRight: '5px' }}/>Fiction</p>
          <p><MicNoneIcon sx={{ color: Colors.WhiteColor , marginRight: '5px' }}/> Non-fiction</p> 
          <p><SentimentSatisfiedAltIcon sx={{ color: Colors.WhiteColor , marginRight: '5px'}}/> Comedy</p>
          <p><FavoriteBorderIcon sx={{ color: Colors.WhiteColor , marginRight: '5px'}}/> Drama</p>
          <p><MicNoneIcon sx={{ color: Colors.WhiteColor , marginRight: '5px'}}/> True Crime</p>
          <p><SearchIcon sx={{ color: Colors.WhiteColor , marginRight: '5px'}}/> Mystery</p>
          <p><MicNoneIcon sx={{ color: Colors.WhiteColor , marginRight: '5px'}}/> Biography</p>
          <p><MicNoneIcon sx={{ color: Colors.WhiteColor , marginRight: '5px'}}/> Sci-Fi</p>
              </div>
          

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
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            <div className="Story-Item">
              <img src={storyImage1} alt="" width={200} style={{ borderRadius: '20px' }} />
              <p>The way I heard it</p>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;

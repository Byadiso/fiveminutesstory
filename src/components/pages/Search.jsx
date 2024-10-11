import "../../Style/LandingPage.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

function Search() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isAuthenticated(setIsLoggedIn);
  }, []);
  return (
    <div>
      <NavBar />
      <div className="search">
        <div className="search_container">     
        <h1><Link style={{textDecoration:"none",color:Colors.TextColor}} to="/Explore">Explore</Link></h1>  
        <p>This is a search layout</p>    
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;

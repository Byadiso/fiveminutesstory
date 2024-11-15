import React from "react";
import "../../Style/Footer.css";
import { FaCopyright } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Colors from "../../Style/Colors.js";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  const currentdate = new Date();
  const year = currentdate.getFullYear();

  return (
    <div
      style={{
        backgroundColor: Colors.BackgroundColor,
      }}
    >
      <footer>
        <div
          className="quick_menu"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: Colors.TextColor,
            backgroundColor: Colors.BackgroundColor,
          }}
        >
          <Link
            to="/about"            
            style={{
              color: Colors.TextColor,              
              margin: "0 10px",
            }}
          >
            <Typography variant="body1"  >About</Typography>
          </Link>
          <Link
            to="/blog"
            style={{
              color: Colors.TextColor,              
              margin: "0 10px",
            }}
          >
            <Typography variant="body1">Blog</Typography>
          </Link>
          <Link
            to="/jobs"
            style={{
              color: Colors.TextColor,              
              margin: "0 10px",
            }}
          >
            <Typography variant="body1">Jobs</Typography>
          </Link>
          <Link
            to="/help"
            style={{
              color: Colors.TextColor,              
              margin: "0 10px",
            }}
          >
            <Typography variant="body1">Help</Typography>
          </Link>
          <Link
            to="/api"
            style={{
              color: Colors.TextColor,              
              margin: "0 10px",
            }}
          >
            <Typography variant="body1">API</Typography>
          </Link>
          <Link
            to="/privacy"
            style={{
              color: Colors.TextColor,
              margin: "0 10px",
            }}
          >
            <Typography variant="body1">Privacy</Typography>
          </Link>
          <Link
            to="/terms"
            style={{
              color: Colors.TextColor,              
              margin: "0 10px",
            }}
          >
            <Typography variant="body1">Terms</Typography>
          </Link>
        </div>
        <div className="social_media">
        <Link
            to="../www.facebook.com"
            style={{
              color: Colors.TextColor,
              textDecoration: "none",
              margin: "0 10px",
            }}
          > <FacebookIcon sx={{ color: Colors.TextColor, margin: "20px" }} /> </Link>
          <Link
            to="../www.twitter.com"
            style={{
              color: Colors.TextColor,
              textDecoration: "none",
              margin: "0 10px",
            }}
          ><TwitterIcon sx={{ color: Colors.TextColor, margin: "20px" }} /></Link>
         <Link
            to="../www.instagram.com"
            style={{
              color: Colors.TextColor,
              textDecoration: "none",
              margin: "0 10px",
            }}
          ><InstagramIcon sx={{ color: Colors.TextColor, margin: "20px" }} /> </Link> 
          <Link
            to="../www.youtube.com/"
            style={{
              color: Colors.TextColor,
              textDecoration: "none",
              margin: "0 10px",
            }}
          ><YouTubeIcon sx={{ color: Colors.TextColor, margin: "20px" }} /></Link>
        </div>
        <div className="copyright" style={{ color: Colors.TextColor }}>
          <h5>
            <FaCopyright className="fa fa-copyright" />
            {year} Five minutes story
          </h5>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

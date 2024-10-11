import React from "react";
import "../../Style/Footer.css";
import { FaCopyright } from "react-icons/fa";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Colors from "../../Style/Colors.js";

function Footer() {
  const currentdate = new Date();

  const year = currentdate.getFullYear();

  return (
    <div style={{      
      backgroundColor:Colors.BackgroundColor,
    }}>
      <footer>
        <div
          className="quick_menu"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color:Colors.TextColor,
            backgroundColor:Colors.BackgroundColor,
          }}
        >
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Help</p>
          <p>API</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div className="social_media">
          <FacebookIcon sx={{color:Colors.TextColor, margin:"20px"}}/>
          <TwitterIcon sx={{color:Colors.TextColor, margin:"20px"}}/>
          <InstagramIcon sx={{color:Colors.TextColor, margin:"20px"}}/>
          <YouTubeIcon sx={{color:Colors.TextColor, margin:"20px"}}/>

        </div>

        <div className="copyright" style={{color:Colors.TextColor}}>
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

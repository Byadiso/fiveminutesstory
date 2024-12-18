import "../../Style/LandingPage.css";
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../firebase/Authentication";
import NavBar from "./Navbar";
import ImageCard from "../Modals/ImageCard";
import Footer from "./Footer";
import CategoryContainer from "./CategoryContainer";
import StoryGenre from "./StoryGenre";
import RecentlyPlayed from "./RecentlyPlayed";


function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const title = "Good Morning Desire";
  const description =
    "Start your day with a smile. We've got some feel-good stories to help you wake up on the right side of the bed.";

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

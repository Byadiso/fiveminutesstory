import React from "react";
import BookIcon from "@mui/icons-material/Book";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import Colors from "../../Style/Colors"; // Assuming Colors is defined in your project
import "../../Style/StoryGenre.css";

const StoryGenre = () => {
  return (
    <div className="story-genres">
      <h4>Storytelling Genres</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <p>
          <BookIcon sx={{ color: Colors.WhiteColor, marginRight: "5px" }} />
          Fiction
        </p>
        <p>
          <MicNoneIcon sx={{ color: Colors.WhiteColor, marginRight: "5px" }} />
          Non-fiction
        </p>
        <p>
          <SentimentSatisfiedAltIcon sx={{ color: Colors.WhiteColor, marginRight: "5px" }} />
          Comedy
        </p>
        <p>
          <FavoriteBorderIcon sx={{ color: Colors.WhiteColor, marginRight: "5px" }} />
          Drama
        </p>
        <p>
          <MicNoneIcon sx={{ color: Colors.WhiteColor, marginRight: "5px" }} />
          True Crime
        </p>
        <p>
          <SearchIcon sx={{ color: Colors.WhiteColor, marginRight: "5px" }} />
          Mystery
        </p>
        <p>
          <MicNoneIcon sx={{ color: Colors.WhiteColor, marginRight: "5px" }} />
          Biography
        </p>
        <p>
          <MicNoneIcon sx={{ color: Colors.WhiteColor, marginRight: "5px" }} />
          Sci-Fi
        </p>
      </div>
    </div>
  );
};

export default StoryGenre;

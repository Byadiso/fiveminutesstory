import React from "react";
import "../../Style/RecentlyPlayed.css"; // Importing the CSS file
import { Stories } from "../../Data/StoryData";


const RecentlyPlayed = () => {

  return (
    <div className="recently-played">
      <h4>Recently Played</h4>
      <div className="stories-container">
        {Stories.map((story, index) => (
          <div className="story-item-played" key={index}>
            <img src={story.image} alt={story.title} style={{width:"185px", height:"190px"}}/>
            <p>{story.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;

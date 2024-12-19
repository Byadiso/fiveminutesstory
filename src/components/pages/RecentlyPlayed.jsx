import React from "react";
import "../../Style/RecentlyPlayed.css"; // Importing the CSS file
// import storyImage1 from "../../../"; // Adjust path as needed

const RecentlyPlayed = () => {
  const stories = [
    { image: "/images/Fiveminutes_hero.jpg", title: "The way I heard it" },
    { image: "/images/Fiveminutes_hero.jpg", title: "Story Two" },
    { image: "/images/Fiveminutes_hero.jpg", title: "Story Three" },
    { image: "/images/Fiveminutes_hero.jpg", title: "Story Four" },
    
  ];

  return (
    <div className="recently-played">
      <h4>Recently Played</h4>
      <div className="stories-container">
        {stories.map((story, index) => (
          <div className="story-item-played" key={index}>
            <img src={story.image} alt={story.title} />
            <p>{story.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;

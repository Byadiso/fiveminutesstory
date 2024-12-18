import React from "react";
import "../../Style/RecentlyPlayed.css"; // Importing the CSS file
import storyImage1 from "../../images/Fiveminutes_hero.jpg"; // Adjust path as needed

const RecentlyPlayed = () => {
  const stories = [
    { image: "../../images/Fiveminutes_hero.jpg", title: "The way I heard it" },
    { image: "storyImage2.jpg", title: "Story Two" },
    { image: "storyImage3.jpg", title: "Story Three" },
    { image: "storyImage4.jpg", title: "Story Four" },
    { image: "storyImage5.jpg", title: "Story Five" },
  ];

  return (
    <div className="recently-played">
      <h4>Recently Played</h4>
      <div className="stories-container">
        {stories.map((story, index) => (
          <div className="story-item-played" key={index}>
            <img src={storyImage1} alt={story.title} />
            <p>{story.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;

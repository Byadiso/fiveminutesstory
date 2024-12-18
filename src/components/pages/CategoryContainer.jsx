import React, { useState } from "react";
import { Link } from "react-router-dom";
import storyImage1 from "../../images/Fiveminutes_hero.jpg"; // Adjust path as needed
import "../../Style/CategoryContainer.css"; // CSS for styling

const CategoryContainer = () => {
  const [activeMenu, setActiveMenu] = useState("Featured");

  const menus = ["Featured", "New & Notable", "Trending", "For You"];
  const storiesByMenu = {
    Featured: Array(10).fill({
      title: "Featured Story",
      img: storyImage1,
      link: "/Playing",
    }),
    "New & Notable": Array(10).fill({
      title: "New & Notable Story",
      img: storyImage1,
      link: "/Playing",
    }),
    Trending: Array(10).fill({
      title: "Trending Story",
      img: storyImage1,
      link: "/Playing",
    }),
    "For You": Array(10).fill({
      title: "Personalized Story",
      img: storyImage1,
      link: "/Playing",
    }),
  };

  return (
    <div className="category-menu">
      {/* Menu Headers */}
      <div className="menu-header">
        {menus.map((menu) => (
          <h4
            key={menu}
            className={`menu-item ${activeMenu === menu ? "active" : ""}`}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </h4>
        ))}
      </div>

      {/* Menu Content */}
      <div className="menu-content">
        <h4>{activeMenu}</h4>
        <div
          className="stories-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(2, auto)",
            gap: "10px",
            justifyItems: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          {storiesByMenu[activeMenu].map((story, index) => (
            <div key={index} className="story-item">
              <Link to={story.link} style={{textDecoration:"none"}}>
                <img
                  src={story.img}
                  alt={story.title}
                  width={200}
                  style={{ borderRadius: "20px" }}
                />
                <p>{story.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;

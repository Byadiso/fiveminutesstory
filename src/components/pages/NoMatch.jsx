import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "85px",
          marginBottom: "80px",
        }}
      >
        <div>
        <h1 style={{ color: "black" }}>404</h1>
        </div>
        
        <p style={{ color: "black" }}> That page doesn't exist or might have been removed!</p>
        <Link to="/">
          <p style={{ color: "black" }}>Return to Home Page</p>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default NoMatch;

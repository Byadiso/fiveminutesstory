import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/LandingPage.jsx";

import Login from "./components/pages/Login.jsx";
import NoMatch from "./components/pages/NoMatch.jsx";
import Logout from "./components/pages/Logout.jsx";
import Register from "./components/pages/RegisterComponent.jsx";

import NowPlaying from "./components/pages/NowPlaying.jsx";
import Search from "./components/pages/Search.jsx";
import Profile from "./components/pages/Profile.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Explore from "./components/pages/Explore.jsx";
import Library from "./components/pages/Library.jsx";
import About from "./components/pages/About.jsx";
import Blog from "./components/pages/Blog.jsx";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="https://byadiso.github.io/fiveminutesstory/" element={<LandingPage />} />   
                 

          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="/Playing" element={<NowPlaying />} />  
          <Route path="/Search" element={<Search />} />  
          <Route path="/Explore" element={<Explore />} />   
          <Route path="/Library" element={<Library />} />  

          <Route path="/Home" element={<LandingPage />} />  
          <Route path="/Profile" element={<Profile />} />                         

         
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />



          <Route path="/Logout" element={<Logout />} />
         
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

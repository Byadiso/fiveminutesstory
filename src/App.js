import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage.jsx";

import Login from "./components/Login.jsx";
import NoMatch from "./components/NoMatch.jsx";
import Logout from "./components/Logout.jsx";
import Register from "./components/RegisterComponent.jsx";

import NowPlaying from "./components/NowPlaying.jsx";
import Search from "./components/Search.jsx";
import Profile from "./components/Profile.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Explore from "./components/Explore.jsx";
import Library from "./components/Library.jsx";



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

          <Route path="/Logout" element={<Logout />} />
          {/* routes when no match */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

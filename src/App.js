import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Learning from './Components/Learning';
import ClassLearning from './Components/ClassLearning';
import Parent from './Components/Parent'; // Import the Parent component
import ApiCalling from './Components/ApiCalling';
import './App.css';

const App = () => {
  const contactInfo = "Contact Us: contact@company.com";
  const platform = "MyBlogs";
  const program = "ReactJS";
  const channel = "Youtube";
  const youtuber = "Kajal";

  return (
    <div>
      <p>Welcome to My Blogs</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Learning">Learners</Link>
          </li>
          <li>
            <Link to="/ClassLearning">ClassLearning</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* Route with no props */}
        <Route path="/" element={<Home/>} />
        {/* Route with hardcoded prop */}
        <Route path="/About" element={<About aboutInfo="About Us: We are a fictional company"/>} />
        {/* single props */}
        <Route path="/Contact" element={<Contact contactInfo={contactInfo} />} />
        {/* multiple props for functional component */}
        <Route path="/Learning" element={<Learning platform={platform} program={program}/>} />
        {/* multiple props for class component */}
        <Route path="/ClassLearning" element={<ClassLearning channel={channel} youtuber={youtuber} />} />
        <Route path="/Parent" element={<Parent />} /> {/* Define route for "/Parent" */}
        <Route path="/ApiCalling" element={<ApiCalling />} />
      </Routes>
    </div>
  );
};

export default App;
import React from "react";
import { Link , useNavigate} from 'react-router-dom';

const Home = () => {
    //use navigate method for redirecting via a functional component
    //But even if you use navigate method you need to define route for parent component in app.js
    const navigate = useNavigate();
    const GoToParent = () => {
        navigate('/Parent');
    }
    return(
        <div>
            <h1>Home Page</h1>
            <p>This is the home page content.</p>
            <Link to="/about">Go to About Page</Link><br/>
            <Link to="/contact">Go to Contact Page</Link><br/>
            <Link to="/learning">Go to Learners page</Link><br/>
            <Link to="/classlearning">Go to Class Learners page</Link><br/><br/>
            <button onClick={GoToParent}>GoToParent</button>
        </div>
    )
}

export default Home;
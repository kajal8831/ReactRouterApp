import React from "react";
import { Link } from "react-router-dom";

const About = ({aboutInfo}) => {
    return (
        <div>
            <h1>About Page</h1>
            <p>{aboutInfo}</p>
            <Link to="/">Back</Link>
        </div>
    )
}

export default About;
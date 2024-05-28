import React from "react";
import { Link } from 'react-router-dom';

const Contact = ({contactInfo}) => {
    return(
        <div>
            <h1>Contact Us Page</h1>
            <p>{contactInfo}</p>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Contact;
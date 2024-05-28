import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Learning ({program,platform}){
    //using states in functional component
    const [message,setMessage] = useState("Please subscribe to our channel")
    const [sub,setSub] = useState("Subscribe");
    
    const ButtonChange = () => {
        setMessage("Thankyou for subscribing");
        setSub("Subscribed");
    }

    return (
        <div>
            <h1>Learning Page</h1>
            <h1>Welcome to {platform}</h1>
            <p>This is {program} tutorial</p>
            <p>{message}</p>
            <button onClick={ButtonChange}>{sub}</button><br/><br/>
            <Link to="/">Back</Link>
        </div>     
    )
}

export default Learning;
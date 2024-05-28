import React from "react";
import subscribebell from './images/subscribebell.png'
import subscribedbell from './images/subscribedbell.png'
import { Link } from "react-router-dom";

class ClassLearning extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Please hit the bell icon to receive all the updates",
         imageURL : subscribebell
      }
    }

    render(){
        const ImageChange = () => {
            this.setState({
                message : "Happy Learning!!",
                imageURL : subscribedbell
            })
        }
        //receiving props passed by router from app.js
        const {channel,youtuber} = this.props;
        return(
            <div>
                <h1>This is class component</h1>
                <p>Hey this is {youtuber}, Welcome to my {channel}</p>
                <p>{this.state.message}</p>
                <img onClick={ImageChange} style={{ height: "30px" , width: "30px" }} src={this.state.imageURL} alt=""/>
                <br/>
                <Link to="/">Back</Link>
            </div>
        )
    }
}

export default ClassLearning;
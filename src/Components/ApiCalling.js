import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function ApiCalling(){
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    <Link to="/">Back</Link>
    </div> 
  );
}

export default ApiCalling;
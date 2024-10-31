import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./forum.css"

function Displaypost() {
  const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('/api/posts')
//       .then(response => setPosts(response.data))
//       .catch(error => console.error(error));
//   }, []);

useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:5000/foru');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData();
}, []);

  return (
    <div className='showposts'>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post._id} className='post'>
          <h3 className='title'>{post.title}</h3>
          <p className='author'>Author: {post.author}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Displaypost;

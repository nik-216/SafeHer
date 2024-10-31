import React from 'react';
import Displaypost from './forum';
import PostForm from './forumpost';
import "./forum.css"

function Forumall() {
  return (
    <div className='AllForum'>
      <h1>Forum</h1>
      <Displaypost />
      <PostForm />
    </div>
  );
}

export default Forumall;

import React from 'react';
import './Post.css'
import { Link } from 'react-router';

const Post = ({post}) => {
    const {body, id , title , userID} = post;
    return (
        <div className='post'>
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}>
            <button>See full post</button></Link>
        </div>
    );
};

export default Post;
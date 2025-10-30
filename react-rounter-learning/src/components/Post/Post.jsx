import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {body, id , title , userID} = post;
    let navigate = useNavigate();
   
    return (
        <div className='post'>
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}>
            <button>See full post</button></Link>
            <button onClick={() => navigate(`/posts/${id}`)}>See Post {id}</button>
        </div>
    );
};

export default Post;
import React from 'react';
import { useLoaderData } from 'react-router';
import '../PostDetails/PostDetails.css'

const PostdDetails = () => {
    const post = useLoaderData();
    const {body , title} = post;
    return (
        <div className='post'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostdDetails;
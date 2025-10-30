import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import '../PostDetails/PostDetails.css'

const PostdDetails = () => {
    const post = useLoaderData();
    const {body , title} = post;
    const navigate = useNavigate();
    return (
        <div className='post'>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={() => navigate('/laptops')}>Main Post Section</button>
        </div>
    );
};

export default PostdDetails;
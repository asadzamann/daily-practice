import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>Total Posts: {posts.length}</h1>
            {posts.map(post => <Post post={post}></Post>)}
        </div>
    );
};

export default Posts;
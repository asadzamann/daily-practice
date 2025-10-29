import React, { use } from 'react';

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);
    console.log(posts)
    return (
        <div>
            <h1>Post Section</h1>
        </div>
    );
};

export default Posts;
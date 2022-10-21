import React from "react";
import postsArray from './posts.json';
import PostItem from "./post-item.js";

const PostList = () => {
    return(
        <div>
            {
                postsArray.map(post => <PostItem key={post._id} post={post}/>)
            }
        </div>
    );
};
export default PostList;
import posts from "./posts.js";
import PostListItem from "./PostListItem.js";


const PostList = () => {
    return (`
        <div>
            ${posts.map(post => {return(PostListItem(post));}).join('')}
        </div>
    `);
}
export default PostList;
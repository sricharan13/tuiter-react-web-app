import posts from "./posts.js";
import PostSummaryListItem from "./PostSummaryListItem.js";


const PostSummaryList = () => {
    return (`
        <div class="list-group">
            ${posts.map(post => {return(PostSummaryListItem(post));}).join('')}
        </div>
    `);
}
export default PostSummaryList;

const PostSummaryListItem = (post) => {
    return(`
        <div class="list-group-item list-group-item-action wd-post">
            <div class="wd-post-text">
                <div class="wd-post-topic">
                    ${post.topic}
                </div>
                <div class="wd-post-author-name">
                    ${post.userName}
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    &middot;
                    <span class="wd-post-time">${post.time}</span>
                </div>
                <div class="wd-post-title">
                    ${post.title}
                </div>
            </div>
            <img src=${post.image} alt="React JS" class="wd-post-image">
        </div> 
   `);
}
export default PostSummaryListItem;
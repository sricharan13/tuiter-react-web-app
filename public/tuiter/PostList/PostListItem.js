const PostListItem = (post) => {

    return(`
        <div class="border border-light ps-3 pe-3 pt-2 pb-2" style="border-color: rgb(47, 51, 54);">
            <div class="d-flex">
                <!-- profile pic -->
                <div class="wd-post-profile-pic">
                    <img src=${post.profilePic} alt="Avatar" class="wd-img-48px rounded-circle"/>
                </div>
                <div class="ps-3 w-100">
                    <!-- name, handle, time -->
                    <div class="w-100 align-items-center d-flex justify-content-between">
                        <div>
                            <span class="wd-font-weight-bold text-white">${post.name}</span>
                            <i class="fa fa-check-circle text-white"></i>
                            <span>@${post.handle}</span>
                            &middot;
                            <span>${post.time}</span>
                        </div>
                        <i class="fa fa-ellipsis-h"></i> 
                    </div>
                    <!-- title -->
                    <div class="text-white mb-2">
                        ${post.title}
                    </div>
                    <!-- image -->
                    <div class="card mb-2">
                        <img class="card-img-top" src=${post.image} alt="image">
                        <div class="card-body">
                            <div class="card-title text-white">
                                ${post.imageTitle}
                            </div>
                            <div class="card-text">
                                ${post.imageText}
                            </div>
                        </div>
                    </div>
                    <!-- comments, retweets, likes and share -->
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span><i class="fa fa-comment pe-2" aria-hidden="true"></i>${post.comments}</span>
                        <span><i class="fa fa-retweet pe-2" aria-hidden="true"></i>${post.retweets}</span>
                        <span><i class="fa fa-heart pe-2" aria-hidden="true"></i>${post.likes}</span>
                        <span><i class="fa fa-share-square pe-2" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
        </div>
   `);
}
export default PostListItem;

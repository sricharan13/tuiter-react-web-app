import React from "react";
const PostSummaryItem = (
    {
        post = {
            "name": "SpaceX",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Dennis and Akiko Tito are the first wo crewmembers on Starship's second commercial spaceflight"
                + " around the moon",
            "image": "occupy-mars.jpeg",
            "comments": "595",
            "retweets": "1,168",
            "likes": "11.1K",
            "profilePic": "spacex.jpeg",
            "parentTweet": ""
        }
    }
) => {
    return(
        <div className="border border-light ps-3 pe-3 pt-2 pb-2">
            <div className="d-flex">
                <div className="wd-post-profile-pic">
                    <img src={`/images/${post.profilePic}`} alt="Avatar" className="wd-img-48px rounded-circle"/>
                </div>
                <div className="ps-3 w-100">
                    <div className="w-100 align-items-center d-flex justify-content-between">
                        <div>
                            <span><strong>{post.name} </strong></span>
                            <i className="bi bi-check-circle-fill"></i>
                            <span> @{post.userName} </span>
                            &middot;
                            <span> {post.time}</span>
                        </div>
                        <i className="bi bi-three-dots"></i>
                    </div>
                    <div className="mb-2">
                        {post.title}
                    </div>
                    {(post.image || post.imageTitle || post.imageText) && (
                        <div className="card mb-2">
                            {post.image && (
                                <img className="card-img-top" src={`/images/${post.image}`} alt={`image`}/>
                            )}
                            {(post.imageTitle || post.imageText) && (
                                <div className="card-body">
                                    <div className="card-title">
                                        {post.imageTitle}
                                    </div>
                                    <div className="card-text">
                                        {post.imageText}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {post.parentTweet && (
                        <div className="list-group">
                            <div className="list-group-item">
                                <div>
                                    <img src={`/images/${post.parentTweet.profilePic}`} className="rounded-circle wd-img-24px"></img>
                                    <span className="ps-2"><strong>{post.parentTweet.name} </strong></span>
                                    <i className="bi bi-check-circle-fill"></i>
                                    <span> @{post.parentTweet.userName} </span>
                                    &middot;
                                    <span> {post.parentTweet.time}</span>
                                </div>
                                <div>
                                    {post.parentTweet.title}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span><i className="bi bi-chat pe-2" aria-hidden="true"></i>{post.comments}</span>
                        <span><i className="bi bi-arrow-down-up pe-2" aria-hidden="true"></i>{post.retweets}</span>
                        <span><i className="bi bi-heart pe-2" aria-hidden="true"></i>{post.likes}</span>
                        <span><i className="bi bi-share pe-2" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostSummaryItem;
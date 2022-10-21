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
        }
    }
) => {
    return(
        <div className="border border-light ps-3 pe-3 pt-2 pb-2">
            <div className="d-flex">
                <div className="wd-post-profile-pic">
                    <img src={`../../images/${post.profilePic}`} alt="Avatar" className="wd-img-48px rounded-circle"/>
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
                    <div className="card mb-2">
                        <img className="card-img-top" src={`../../images/${post.image}`} alt="image"/>
                        <div className="card-body">
                            <div className="card-title">
                                {post.imageTitle}
                            </div>
                            <div className="card-text">
                                {post.imageText}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span><i className="bi bi-chat pe-2" aria-hidden="true"></i>{post.comments}</span>
                        <span><i className="bi bi-retweet pe-2" aria-hidden="true"></i>{post.retweets}</span>
                        <span><i className="bi bi-heart pe-2" aria-hidden="true"></i>{post.likes}</span>
                        <span><i className="bi bi-share pe-2" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostSummaryItem;
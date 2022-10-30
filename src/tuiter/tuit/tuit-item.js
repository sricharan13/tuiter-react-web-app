import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <div className="border border-light ps-3 pe-3 pt-2 pb-2">
            <div className="d-flex">
                <div className="wd-post-profile-pic">
                    <img src={`../../images/${post.image}`} alt="Avatar" className="wd-img-48px rounded-circle"/>
                </div>
                <div className="ps-3 w-100">
                    <div className="w-100 align-items-center d-flex justify-content-between">
                        <div>
                            <span><strong>{post.userName} </strong></span>
                            <i className="bi bi-check-circle-fill"></i>
                            <span> {post.handle} </span>
                            &middot;
                            <span> {post.time}</span>
                        </div>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}></i>
                    </div>
                    <div className="mb-2">
                        {post.tuit}
                    </div>
                    {/*{(post.postImage || post.imageTitle || post.imageText) && (*/}
                    {/*    <div className="card mb-2">*/}
                    {/*        {post.postImage && (*/}
                    {/*            <img className="card-img-top" src={`../../images/${post.postImage}`}
                     alt={`image`}/>*/}
                    {/*        )}*/}
                    {/*        {(post.imageTitle || post.imageText) && (*/}
                    {/*            <div className="card-body">*/}
                    {/*                <div className="card-title">*/}
                    {/*                    {post.imageTitle}*/}
                    {/*                </div>*/}
                    {/*                <div className="card-text">*/}
                    {/*                    {post.imageText}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        )}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    {/*{post.parentTweet && (*/}
                    {/*    <div className="list-group">*/}
                    {/*        <div className="list-group-item">*/}
                    {/*            <div>*/}
                    {/*                <img src={`/images/${post.parentTweet.profilePic}`} className="rounded-circle wd-img-24px"></img>*/}
                    {/*                <span className="ps-2"><strong>{post.parentTweet.name} </strong></span>*/}
                    {/*                <i className="bi bi-check-circle-fill"></i>*/}
                    {/*                <span> @{post.parentTweet.userName} </span>*/}
                    {/*                &middot;*/}
                    {/*                <span> {post.parentTweet.time}</span>*/}
                    {/*            </div>*/}
                    {/*            <div>*/}
                    {/*                {post.parentTweet.title}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span><i className="bi bi-chat pe-2" aria-hidden="true"></i>{post.replies}</span>
                        <span><i className="bi bi-arrow-down-up pe-2" aria-hidden="true"></i>{post.retuits}</span>
                        <span><i className={`bi pe-2 ${post.liked && "bi-heart-fill wd-color-red"} ${!post.liked && "bi-heart"}`} aria-hidden="true"></i>{post.likes}</span>
                        <span><i className="bi bi-share pe-2" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;
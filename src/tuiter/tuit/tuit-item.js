import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk, deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <div className="border border-light ps-3 pe-3 pt-2 pb-2">
            <div className="d-flex">
                <div className="wd-tuit-profile-pic">
                    <img src={`../../images/${tuit.image}`} alt="Avatar" className="wd-img-48px rounded-circle"/>
                </div>
                <div className="ps-3 w-100">
                    <div className="w-100 align-items-center d-flex justify-content-between">
                        <div>
                            <span><strong>{tuit.username} </strong></span>
                            <i className="bi bi-check-circle-fill"></i>
                            <span> {tuit.handle} </span>
                            &middot;
                            <span> {tuit.time}</span>
                        </div>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div className="mb-2">
                        {tuit.tuit}
                    </div>
                    {/*{(tuit.tuitImage || tuit.imageTitle || tuit.imageText) && (*/}
                    {/*    <div className="card mb-2">*/}
                    {/*        {tuit.tuitImage && (*/}
                    {/*            <img className="card-img-top" src={`../../images/${tuit.tuitImage}`}
                     alt={`image`}/>*/}
                    {/*        )}*/}
                    {/*        {(tuit.imageTitle || tuit.imageText) && (*/}
                    {/*            <div className="card-body">*/}
                    {/*                <div className="card-title">*/}
                    {/*                    {tuit.imageTitle}*/}
                    {/*                </div>*/}
                    {/*                <div className="card-text">*/}
                    {/*                    {tuit.imageText}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        )}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    {/*{tuit.parentTweet && (*/}
                    {/*    <div className="list-group">*/}
                    {/*        <div className="list-group-item">*/}
                    {/*            <div>*/}
                    {/*                <img src={`/images/${tuit.parentTweet.profilePic}`} className="rounded-circle wd-img-24px"></img>*/}
                    {/*                <span className="ps-2"><strong>{tuit.parentTweet.name} </strong></span>*/}
                    {/*                <i className="bi bi-check-circle-fill"></i>*/}
                    {/*                <span> @{tuit.parentTweet.userName} </span>*/}
                    {/*                &middot;*/}
                    {/*                <span> {tuit.parentTweet.time}</span>*/}
                    {/*            </div>*/}
                    {/*            <div>*/}
                    {/*                {tuit.parentTweet.title}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span><i className="bi bi-chat pe-2" aria-hidden="true"></i>{tuit.replies}</span>
                        <span><i className="bi bi-arrow-down-up pe-2" aria-hidden="true"></i>{tuit.retuits}</span>
                        <span>
                            <i onClick={() => {
                                    if(!tuit.liked) {
                                        dispatch(updateTuitThunk({
                                            disliked: false,
                                        ...tuit, liked: true, likes: tuit.likes + 1}))
                                    }
                                    else {
                                        dispatch(updateTuitThunk({
                                            ...tuit, liked: false, likes: tuit.likes - 1}))
                                    }
                                }}
                                 className={`bi pe-2 ${tuit.liked && "bi-heart-fill wd-color-red"} ${!tuit.liked && "bi-heart"}`} aria-hidden="true"></i>{tuit.likes}</span>
                        <span>
                            <i onClick={() => {
                                    if(!tuit.disliked) {
                                        dispatch(updateTuitThunk({
                                            liked: false,
                                            ...tuit, disliked: true, dislikes: tuit.dislikes + 1}))
                                    }
                                    else {
                                        dispatch(updateTuitThunk({
                                            ...tuit, disliked: false, dislikes: tuit.dislikes - 1}))
                                    }

                                }}
                               className={`bi pe-2 ${tuit.disliked && "bi-hand-thumbs-down-fill"} ${!tuit.disliked && "bi-hand-thumbs-down"}`} aria-hidden="true"></i>{tuit.dislikes}</span>

                        <span><i className="bi bi-share pe-2" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;
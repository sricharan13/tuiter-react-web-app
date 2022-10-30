import React, {useState} from "react";
import "./index.css";
import {useSelector} from "react-redux";
import EditProfileComponent from "../edit-profile";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    const [editing, setEditing] = useState(false)
    return(
        <>
            {!editing ?
                <div className="border border-light">
                    <div className="d-flex align-items-center">
                        <div><i className="bi bi-arrow-left ps-2 pe-2" aria-hidden="true"></i></div>
                        <div className="ps-5">
                            <div><strong>{profile.firstName} {profile.lastName}</strong></div>
                            <div>{profile.tuits} Tweets</div>
                        </div>
                    </div>
                    <div className="wd-h-250px">
                        <div className="position-relative">
                            <img className="w-100 wd-h-200px" src={`../../images/${profile.bannerPicture}`}/>
                            <img className="rounded-circle position-absolute wd-img-96px wd-banner-and-profile-pic" src={`../../images/${profile.profilePicture}`}/>
                        </div>
                        <button className="btn btn-light rounded-pill border float-end me-2 mt-2" onClick={() => setEditing(true)}><strong>Edit Profile</strong></button>
                    </div>
                    <div>
                        <div className="mt-2">
                            <div><strong>{profile.firstName} {profile.lastName}</strong></div>
                            <div><span>{profile.handle}</span></div>
                        </div>
                        <div className="pt-2">
                            <span>{profile.bio}</span>
                        </div>
                        <div className="pt-2">
                            <span>{profile.website}</span>
                        </div>
                        <div className="pt-2">
                            <span className="pe-2"><i className="bi bi-pin-map pe-1"></i>{profile.location}</span>
                            <span className="pe-2"><i className="bi bi-balloon pe-1"></i>Born {profile.dateOfBirth}</span>
                            <span className="pe-2"><i className="bi bi-calendar-date pe-1"></i>Joined {profile.dateJoined}</span>
                        </div>
                        <div className="pt-2">
                            <span className="pe-2"><strong>{profile.followingCount}</strong> Following</span>
                            <span className="pe-2"><strong>{profile.followersCount}</strong> Followers</span>
                        </div>
                    </div>
                </div>
                : <EditProfileComponent stopEdit={() => setEditing(false)}/>
            }
        </>
    );
};
export default ProfileComponent;
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfileComponent = ({stopEdit}) => {
    const profile = useSelector(state => state.profile);
    const [profileState, setProfileState] = React.useState({profile})
    const dispatch = useDispatch();
    const updateProfileData = (event) => {
        setProfileState({
            ...profileState,
            [event.target.name]: event.target.value
        })
    }
    const saveClickHandler = () => {
        dispatch(updateProfile({profile: profileState}));
    }
    return(
        <>
            <div className="border border-light">
                <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <div><i className="bi bi-x-lg ps-2 pe-2" onClick={stopEdit} aria-hidden="true"></i></div>
                    <div><strong>Edit Profile</strong></div>
                    <div className="float-right"><button className="btn btn-dark rounded-pill border me-2" onClick={() => {stopEdit(); saveClickHandler()}}>Save</button></div>
                </div>
                <div className="wd-h-250px">
                    <div className="position-relative">
                        <img className="w-100 wd-h-200px" src={`../../images/${profile.bannerPicture}`}/>
                        <img className="rounded-circle position-absolute wd-img-96px wd-banner-and-profile-pic" src={`../../images/${profile.profilePicture}`}/>
                    </div>
                </div>
                <div className="mt-2 ms-2 me-2">
                    <div className="mt-2 form-floating">
                        <input type="text" id="firstName" className="form-control" name="firstName" defaultValue={profile.firstName} onChange={(event) => updateProfileData(event)}/>
                        <label for="firstName">First Name</label>
                    </div>
                    <div className="mt-2 form-floating">
                        <input type="text" id="lastName" className="form-control" name="lastName" defaultValue={profile.lastName} onChange={(event) => updateProfileData(event)}/>
                        <label for="lastName">Last Name</label>
                    </div>
                    <div className="mt-2 form-floating">
                        <textarea id="bio" className="form-control" name="bio" defaultValue={profile.bio} onChange={(event) => updateProfileData(event)}/>
                        <label for="bio">Bio</label>
                    </div>
                    <div className="mt-2 form-floating">
                        <input type="text" id="location" className="form-control" name="location" defaultValue={profile.location} onChange={(event) => updateProfileData(event)}/>
                        <label for="location">Location</label>
                    </div>
                    <div className="mt-2 form-floating">
                        <input type="text" id="website" className="form-control" name="website" defaultValue={profile.website} onChange={(event) => updateProfileData(event)}/>
                        <label for="website">Website</label>
                    </div>
                    <div className="mt-2">
                        <label for="dateOfBirth">Date of Birth</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" defaultValue={profile.dateOfBirth} onChange={(event) => updateProfileData(event)}/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EditProfileComponent;
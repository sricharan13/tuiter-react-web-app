import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item.js";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [])

    return(
        <div>
            {
                tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
            }
        </div>
    );
};
export default TuitList;
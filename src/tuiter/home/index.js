import React from "react";
import TuitList from "../tuit/index.js";
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;
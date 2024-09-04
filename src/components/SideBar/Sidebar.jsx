import React from "react";
import "./Sidebar.css";
import {assets} from "../../assets";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <img src={assets.menu_icon} alt="" className="menu" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className="bottom">

            </div>
        </div>
    );
}
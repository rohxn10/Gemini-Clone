import React from "react";
import "./SideBar.css";
import {assets} from "../../assets/assets";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <img src={assets.menu_icon} alt="" className="menu" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    <p>New Chat</p>
                </div>
                <div className="recent">
                    <p className="recent-title">Recent</p>
                </div>
            </div>
            <div className="bottom">

            </div>
        </div>
    );
}